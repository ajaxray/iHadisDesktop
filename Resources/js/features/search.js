var Search = function() {
    var perform = function(keyword, data) {
        console.log('Seraching... '+ keyword);
        console.log( data);
    };

    return {

        bindEvents: function() {
            // Don't hide dropdown on checking search sources
            $('#search .dropdown-menu li').click(function(e){e.stopPropagation();});
            $('#search').submit(function(e){
                e.preventDefault();
                data = $('#search').serializeArray();

                perform($('#q').val(), data);
            });
        }
    };
}();