var AppRouter = Backbone.Router.extend({

    dashboardView: null,

    routes: {
        ''              : 'dashboard',
        'book/:id'      : 'openBook',
        'chapter/:id'   : 'openChapter'
        //'bookmarks/:book_id':
    },

    initialize: function() {
        _.bindAll(this, 'dashboard');
    },

    dashboard: function() {
        console.log('=> dashboard');

        if(_.isNull(this.dashboardView)) {
            // First time
            var router = this;

            this.dashboardView = new DashboardView({collection: App.books});
            App.setPage(this.dashboardView);
        } else {
            App.setPage(this.dashboardView);
        }
    },

    openBook: function(id) {
        console.log('=> openBook/'+id);

        var bookToOpen = App.books.find(function(book) { return book.id == id; });
        App.openBook = bookToOpen.loadChapters();

        App.setPage(new BookView({model: App.openBook}));
    },

    openChapter: function(id) {
        console.log('=> openChapter/'+id);

        var chapterToOpen = App.openBook.get('chapters')
                                .find(function(chapter) { return chapter.id == id; });
        App.openChapter = chapterToOpen.loadHadis();

        App.setPage(new ChapterView({model: App.openChapter}));
    }
});