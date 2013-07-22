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
            var query = 'SELECT * FROM ' + table;

            if(method == 'read'){
                var conditions = {};

                if(id) conditions.id = parseInt(id, 10);
                if(options.data) _.extend(conditions, options.data);
                if(! _.isEmpty(conditions)) {
                    query += buildWhere(conditions);
                }
            }

            return query;
        },

        search: function(table, conditions) {
            var query = 'SELECT * FROM '+ table + buildWhere(conditions);
            return getJSONResult(query);
        }
    };

}();
