Backbone.sync = function(method, model, options) {

	if(_.isNull(App.db)) console.error('No Database connection!');

	var query = BackboneDb.createQuery(method, model.url);

    if (method === "read") {
		var data = App.db.execute(query);
		var resultJSON = BackboneDb.resultToJSON(data);
		console.log(data);
		console.log(resultJSON);

		// If it's not a collection, use first value only
		if(_.isUndefined(model.models)) {
			resultJSON = resultJSON[0] || null;
		}

		// simulate a normal async network call
		setTimeout(function(){
			options.success(resultJSON, 'success', null);
		}, 0);

	}


    // console.log(method);
    // console.log(model);
    // console.log(options);
};

var BackboneDb = function() {
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

		createQuery: function(method, url) {
			// For models, it's a funciton
			if(_.isFunction(url)) url = url();

			var parts = _.compact(url.split('/'));
			if(parts.length === 0) return false;

			var table = parts[0];
			var id = parts[1] || null;
			var query = null;

			if(method == 'read'){
				query = 'SELECT * FROM ' + parts[0];
				if(id) {
					query += ' WHERE id = ' + id;
				}
			}

			return query;
		}
	}
	
}();
