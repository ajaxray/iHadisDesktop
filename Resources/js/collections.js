var BookCollection = Backbone.Collection.extend({ model: Book, url: '/books'});
var ChapterCollection = Backbone.Collection.extend({ model: Chapter, url: '/chapters'});
var HadisCollection = Backbone.Collection.extend({ model: Hadis, url: '/hadis'});