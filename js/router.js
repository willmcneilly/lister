// Router already instatiated in app

App.Router.map(function(){
	this.resource('lists', function(){
		this.route('new');
	});
	this.resource('about');
	this.resource('contact');
})