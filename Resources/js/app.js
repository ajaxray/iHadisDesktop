var App = function() {

	Backbone.ajax = function(request) {
		console.log(request);
	};

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
		// Change ative language
		$('#langs .language').change(function(e){
			if(this.checked) App.activeLangs.push($(this).val());
			else             App.activeLangs = _.without(App.activeLangs, $(this).val());
			App.currentPage.render();
		});
	};

	return {
		blocks: blocks,
		apiUrl: null,
		appRouter: null,
		books: null,
		defaultLang: 'bn',
		activeLangs: ['bn'],
		currentPage: null,

		init: function() {
			this.books = new BookCollection([{id: 1, title: 'Sahih al-Bukhari'}, {id: 2, title: 'Sahih Muslim'}]);
			this.appRouter = new AppRouter();

			// Fix sidebar height
			$(window).bind('resize', fullheightSidebar);
			bindEvents();

			blocks.page.empty();
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
