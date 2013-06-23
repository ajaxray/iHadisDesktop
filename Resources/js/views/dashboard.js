var DashboardView = BaseView.extend({


    // initialize: function(params) {

    //     this.adIndex = -1; this.showClickedAds = false;
    //     this.collection.on('reset', this.render, this);
    // },
    
    template: Templates.dashboard,

    events : {
    //    'click .btn-book' : 'openBook'
    },

    render: function() {
        $(this.el).html(_.template(this.template, {
            books: this.collection
        }));

        return this;
    }

});