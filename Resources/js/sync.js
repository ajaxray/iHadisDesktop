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
