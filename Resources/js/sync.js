Backbone.sync = function(method, model, options) {

    if(_.isNull(App.db)) console.error('No Database connection!');

    var query = BackboneDb.createQuery(method, model, options);

    if (method === "read") {
        var data = App.db.execute(query);
        var resultJSON = BackboneDb.resultToJSON(data);
        console.log(data);
        console.log(resultJSON);

        // If it's not a collection, use first value only
        if(_.isUndefined(model.models)) {
            resultJSON = resultJSON[0] || null;
        }

        if(options.async === false) {
            options.success(resultJSON, 'success', null);
        } else {
            // simulate a normal async network call
            setTimeout(function(){
                options.success(resultJSON, 'success', null);
            }, 0);
        }

    }


    // console.log(method);
    // console.log(model);
    // console.log(options);
};

var BackboneDb = function() {
    var buildWhere = function(conditions) {
        var where = ' WHERE ';
        where += _.map(conditions, function(v, k, list) {
            return k + " = " + (_.isNumber(v)? v : "'"+ v +"'");
        }).join(' AND ');
        //console.log(where);
        return where;
    };

    return {
        resultToJSON: function(rows) {
            var result = [];
            while (rows.isValidRow()) {
                var row = {};
                _(rows.fieldCount()).times(function(i){
                    row[rows.fieldName(i)] = rows.field(i);
                });

                result.push(row);
                rows.next();
            }

            return result;
        },

        createQuery: function(method, model, options) {
            // url can be a function or string
            var url = _.result(model, 'url');

            var parts = _.compact(url.split('/'));
            if(parts.length === 0) return false;

            var table = parts[0];
            var id = parts[1] || null;
            var query = null;

            if(method == 'read'){
                conditions = {};
                query = 'SELECT * FROM ' + table;

                if(id) conditions.id = parseInt(id, 10);
                if(options.data) _.extend(conditions, options.data);
                if(! _.isEmpty(conditions)) {
                    query += buildWhere(conditions);
                }
            }

            return query;
        }
    };

}();
