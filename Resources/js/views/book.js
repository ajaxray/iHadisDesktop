var BookView = BaseView.extend({

    events : {
    //    'click .btn-book' : 'openBook'
    },

    render: function() {
        $(this.el).html(_.template(Templates.book, this.model.toJSON()));

        return this;
    }

});