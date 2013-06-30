var BaseModel = Backbone.Model.extend({
    idAttribute: "id",

    urlRoot: function(){
		console.log('Nope! No idea of sync here');
    },

    groupLangField: function (attributes, field) {
        attributes[field] = {
            'bn' : attributes[field + '_bn'],
            'en' : attributes[field + '_en'],
            'ar' : attributes[field + '_ar']
        };

        return attributes;
    }
});