var AppRouter = Backbone.Router.extend({

    dashboardView: null,

    routes: {
        ''          : 'dashboard',
        'book/:id'  : 'openBook'
    },

    initialize: function() {
        _.bindAll(this, 'dashboard');

        this.dashboardView = new DashboardView({collection: App.books});
    },

    dashboard: function() {
        console.log('=> dashboard');
        App.setPage(this.dashboardView);
    },

    openBook: function(id) {
        console.log('=> openBook/'+id);

        var bookToOpen = App.books.find(function(book) { return book.id == id; });
        bookToOpen.loadChapters();

        App.setPage(new BookView({model: bookToOpen}));
    }

});