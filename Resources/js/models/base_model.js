var BaseModel = Backbone.Model.extend({
    idAttribute: "id",

    sync: function(method, model, options) {
        if (method === "create") {

        }
        console.log(method);
        console.log(model);
        console.log(options);
    },

    urlRoot: function(){
		console.log('Nope! No idea of sync here');
    }
});