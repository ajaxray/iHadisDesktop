var ChapterView = BaseView.extend({

    events : {
    //    'click .btn-book' : 'openBook'
    },

    render: function() {
        $(this.el).html(_.template(Templates.chapter, this.model.toJSON()));

        return this;
    }

});