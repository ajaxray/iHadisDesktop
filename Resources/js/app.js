var App = function() {

	var blocks = {
		main: $('#main'),
		sidebar: $('#sidebar'),
		page: $('#page'),
		footer: $('#footer')
	};

	var fullheightSidebar = function() {
		var ht = ($(main).height() > ($(window).height() - 100))? $(main).height() + 40: $(window).height() - 100;
		$(App.blocks.sidebar).css('min-height', ht);
	};

	var prepareLayout = function(loaded_books) {
		Goto.renderWidget();

		fullheightSidebar();
	};

	var bindEvents = function() {
		// Fix sidebar height
		$(window).bind('resize', fullheightSidebar);

		// Change ative language
		$('#langs .language').change(function(e){
			if(this.checked) App.activeLangs.push($(this).val());
			else             App.activeLangs = _.without(App.activeLangs, $(this).val());

			var checkedLang = $('#langs .language:checked');
			if(checkedLang.length == 1) checkedLang.attr('disabled', 'disabled');
			else						checkedLang.removeAttr('disabled');
			App.currentPage.render();
			App.reloadFonts();
		});

		// Bind events of specific feature
		Search.bindEvents();
		Goto.bindEvents();
	};

	return {
		blocks: blocks,
		apiUrl: null,
		appRouter: null,
		books: new BookCollection(),
		openBook: null,
		openChapter: null,
		defaultLang: 'bn',
		activeLangs: ['bn'],
		currentPage: null,
		db: Ti.Database.openFile(Ti.Filesystem.getFile(Ti.Filesystem.getApplicationDataDirectory(), 'hadis.db')),

		init: function() {
			this.appRouter = new AppRouter();
			this.books.fetch({async: false});

			prepareLayout();
			bindEvents();

			blocks.page.empty();
			Backbone.history.start();
		},

		setPage: function(view) {
			if(this.currentPage) this.currentPage.close();

			if(typeof view == 'object') {
				view.render().$el.appendTo(blocks.page);
				this.currentPage = view;
			} else {
				// Sometimes it can be just a string
				blocks.page.html(view);
			}
			this.reloadFonts();
			fullheightSidebar();
		},

		printInActiveLang: function(data, prefix) {
			var output = '';
			var format = '<span class="<%= l %>"><%= d[l] %></span>';

			prefix = prefix || 'content_';
			console.log(data);
			_.each(this.activeLangs, function(lang) {
				if(_.contains(_.keys(data), prefix+lang)) {
					output += _.template(format, {d: data, l: prefix+lang});
				}
			});

			return output;
		},

		reloadFonts: function() {
			$('.bn').css('font-family', 'kalpurush');
		}
	};
}();
