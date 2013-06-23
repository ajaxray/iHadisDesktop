var BaseView = Backbone.View.extend({

	close: function(){
		this.remove();
		this.unbind();

		if(this.model) this.model.off();
		if(this.collection) this.collection.off();
	}

});
