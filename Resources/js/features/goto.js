var Goto = function() {
    var perform = function(hadisFields) {
        var result = BackboneDb.search('hadis', hadisFields);
        if(_.isEmpty(result)) {
            alert('Hadis '+ num(hadisFields.serial_no) + ' not found in '+ getBook(hadisFields.book_id).get('title'));
        } else {
            var hadis = new Hadis(result[0]);
            var content = new SearchView({collection: new HadisCollection([hadis])});
            content.title = getBook(hadis.get('book_id')).get('title') + ' এর '+ num(hadis.get('serial_no')) + ' নং হাদিস';
            App.setPage(content);
        }
    };

    return {
        renderWidget: function() {
            $('#goto').html(_.template(Templates.widget_goto, { books: App.books }));
        },

        bindEvents: function() {
            // Don't hide dropdown on checking search sources
            $('#goto-perform').click(function(e){
                e.preventDefault();

                var data = $('#goto-form').serializeArray();
                perform(serialArrToObj(data));
            });
        }
    };
}();