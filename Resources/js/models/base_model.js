var BaseModel = Backbone.Model.extend({
    idAttribute: "id",

    urlRoot: function(){
		console.log('Nope! No idea of sync here');
    }
});