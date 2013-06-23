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