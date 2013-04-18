App.ListsNewRoute = Ember.Route.extend({
	model: function(){
		return App.List.createRecord();
	}
});