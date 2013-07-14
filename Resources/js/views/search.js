var SearchView = BaseView.extend({

	title: 'Serch Result',
    events : {
    //    'click .btn-book' : 'openBook'
    },

    render: function() {
		var data = {hadises: this.collection, title: this.title};

        $(this.el).html(_.template(Templates.search, data));
        return this;
    }

});