var Book = BaseModel.extend({
    url: function(){ return'/books/' + this.id; },

	defaults : {
        'title' : null,
        'collector' : null,
        'chapters' : null
    },

    initialize: function() {
        return this;
    },

    loadChapters: function(force) {
        if(force || _.isNull(this.get('chapters'))) {
            var chapters = new ChapterCollection();
            chapters.fetch({async:false, data:{book_id: this.id}});

            this.set('chapters', chapters);
        }
        return this;
    }

});