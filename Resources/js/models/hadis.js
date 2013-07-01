var Hadis = BaseModel.extend({
	defaults : {
        'book' : null,
        'chapter' : null,
        'serial' : null,
        'ifa_serial' : null,
        'body' : {
			'bn' : '',
			'en' : ''
        }
    },

    parse: function (response, options) {
        response = this.groupLangField(response, 'content');

        return response;
    }

});