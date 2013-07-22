var Search = function() {
    var perform = function(data) {
        if(_.isEmpty(data.q.trim())){
            alert('Please enter keyword to search'); return false;
        }
        if(!_.has(data, 'all_books') && _.isEmpty(data.books)){
            alert('Select at lease 1 book'); return false;
        }

        var query = "SELECT * FROM hadis WHERE content_" + data.lang +" LIKE '%"+ data.q.trim() +"%'";
        if(! _.has(data, 'all_books')) query += " AND book_id in ("+ data.books.join() +")";

        var result = getJSONResult(query);

        var content = new SearchView({collection: new HadisCollection(result)});
        content.title = '<i>"'+ data.q.trim() + '"</i> দিয়ে '+ num(result.length) +'টি হাদিস পাওয়া গেছে';
        App.setPage(content);
        //console.log( data);
        //console.log('Seraching... '+ query);
    };

    return {

        bindEvents: function() {
            // Don't hide dropdown on checking search sources
            $('#search .dropdown-menu li').click(function(e){e.stopPropagation();});
            // If "All" checked, uncheck indevisuals and opposite
            $('#search input.book').click(function(){
                if($('#all_books').prop('checked')) $('#all_books').click();
                if($('#search input.book:checked').length === 0) $('#all_books').click();
            });
            $('#all_books').click(function(){ $('#search input.book:checked').click(); });

            $('#search').submit(function(e){
                e.preventDefault();
                var data = $('#search').serializeArray();
                perform(serialArrToObj(data));
            });
        }
    };
}();