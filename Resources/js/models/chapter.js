var Chapter = BaseModel.extend({
	defaults : {
        'chapter_no' : null,
        'title' : null,
        'hadises' : null // HadisCollection()
    },

    loadHadis: function  () {
		var chapterHadis = new HadisCollection();
		chapterHadis.fetch({async: false, data:{chapter_id: this.id}});

		this.set('hadises', chapterHadis);
		return this;
    },

    parse: function (response, options) {
		response = this.groupLangField(response, 'title');

		return response;
    }
});