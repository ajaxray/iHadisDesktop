var ChapterView = BaseView.extend({

    events : {
    //    'click .btn-book' : 'openBook'
    },

    render: function() {
		var book = App.openBook;
		var data = _.extend(this.model.toJSON(), {book_title: book.get('title'), book_id: book.get('id')});

        $(this.el).html(_.template(Templates.chapter, data));
        return this;
    }

});