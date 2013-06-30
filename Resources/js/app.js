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
		});
	};

	return {
		blocks: blocks,
		apiUrl: null,
		appRouter: null,
		books: new BookCollection(),
		defaultLang: 'bn',
		activeLangs: ['bn'],
		currentPage: null,
		db: Ti.Database.openFile(Ti.Filesystem.getFile(Ti.Filesystem.getApplicationDataDirectory(), 'hadis.db')),

		init: function() {
			this.appRouter = new AppRouter();

			bindEvents();

			blocks.page.empty();
			fullheightSidebar();
			Backbone.history.start();
		},

		setPage: function(view) {
			if(this.currentPage) this.currentPage.close();
			view.render().$el.appendTo(blocks.page);

			this.currentPage = view;
		},

		printInActiveLang: function(data) {
			var output = '';

			_.each(this.activeLangs, function(lang) {
				if(_.contains(_.keys(data), lang)) {
					output += _.template('<span class="<%= l %>"><%= d[l] %></span>', {d: data, l: lang});
				}
			});
			return output;

		}
	};
}();
