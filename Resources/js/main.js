//Create ans set menu
if(typeof Ti != 'undefined') {
	var menu = Ti.UI.createMenu(),
	fileItem = Ti.UI.createMenuItem('File'),
	exitItem = fileItem.addItem('Exit', function() {
	  if (confirm('Cannot allocate some more time for studying hadith?')) {
	    Ti.App.exit();
	  }
	});

	menu.insertItemAt(fileItem, 0);
	Ti.UI.setMenu(menu);
}

$(document).ready(function(){
	App.init();
	//$("select, input, a.button, button").uniform();
	$(".uniform").uniform({selectAutoWidth: false});
	$('.bangla').css('font-family', 'sans-serif');
});

var App = {

	blocks: {
		main: $('#main'),
		sidebar: $('#sidebar'),
		page: $('#page'),
		footer: $('#footer')
	},

	helpers: {

		fullheightSidebar: function() {
			var ht = ($(main).height() > ($(window).height() - 100))? $(main).height() + 40: $(window).height() - 100;

			$(App.blocks.sidebar).css('min-height', ht);
		},

		showSection: function(id) {
			$('section').hide();
			$('#'+id).show();
		}
	},

	init: function() {
		// Fix sidebar height
		App.helpers.fullheightSidebar();
		$(window).bind('resize', App.helpers.fullheightSidebar);
	}
};