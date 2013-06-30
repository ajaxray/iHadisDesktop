var AppRouter = Backbone.Router.extend({

    dashboardView: null,

    routes: {
        ''          : 'dashboard',
        'book/:id'  : 'openBook'
    },

    initialize: function() {
        _.bindAll(this, 'dashboard');
    },

    dashboard: function() {
        console.log('=> dashboard');

        if(_.isNull(this.dashboardView)) {
            // First time
            var router = this;
            App.books.fetch({async: false});
            this.dashboardView = new DashboardView({collection: App.books});
            App.setPage(this.dashboardView);
        } else {
            App.setPage(this.dashboardView);
        }
    },

    openBook: function(id) {
        console.log('=> openBook/'+id);

        var bookToOpen = App.books.find(function(book) { return book.id == id; });
        bookToOpen.loadChapters();

        App.setPage(new BookView({model: bookToOpen}));
    }

});