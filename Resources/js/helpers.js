var nums_bn = {'1' : '১', '2' : '২', '3' : '৩', '4' : '৪', '5' : '৫', '6' : '৬', '7' : '৭', '8' : '৮', '9' : '৯', '0' : '০'};

function loadJSDirectory(dir, recursive) {
	if(typeof dir == 'string') dir = Ti.Filesystem.getFile(Ti.Filesystem.getApplicationDirectory() + '/Resources/js/' + dir);

	if(dir.exists() && dir.isDirectory()) {
		_.each(dir.getDirectoryListing(), function(file) {
			if(file.isFile() && !file.isHidden()) {
				document.writeln('<script src="'+ absToRelativePath(file.toURL()) +'"></script>');
			}
			if(file.isDirectory() && recursive === true) loadJSDirectory(file);
		});
	}
}

function absToRelativePath (absPath) {
	var resourceDir = '/Resources/';

	return absPath.substring(absPath.indexOf(resourceDir) + resourceDir.length);
}

function getBook(id) {
	if(App.books.length === 0) {
		console.error('No book in App.books!');
	} else {
		return App.books.find(function(book){ return book.id == id; });
	}
}

function serialArrToObj(dataArr) {
	var data = {};
	_.each(dataArr, function(item) {
		if(item.name.substr(-2, 2) == '[]') { // Array field
			var arrName = item.name.slice(0, -2);
			if(typeof data[arrName] !== 'object') data[arrName] = [];

			data[arrName].push(item.value);
		} else {
			data[item.name] = item.value;
		}
	});

	return data;
}

function getJSONResult(query) {
	return BackboneDb.resultToJSON(App.db.execute(query));
}

function num(val) {
	return _.map(val+"".split(''), function(n){ return nums_bn[n]; }).join('');
}