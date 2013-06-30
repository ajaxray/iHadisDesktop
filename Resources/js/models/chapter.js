var Chapter = BaseModel.extend({
	defaults : {
        'chapter_no' : null,
        'title' : null,
        'hasises' : null // HadisCollection()
    },
    parse: function (response, options) {
		response = this.groupLangField(response, 'title');

		return response;
    }
});