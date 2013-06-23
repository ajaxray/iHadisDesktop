var Chapter = BaseModel.extend({
	defaults : {
        'chapter_no' : null,
        'title' : {
			'bn' : ''
        },
        'hasises' : null // HadisCollection()
    }
});