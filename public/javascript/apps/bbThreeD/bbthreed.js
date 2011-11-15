var BBThreeD = {
	Routers: {},
	Views: {},
	init: function(){
		console.log("init the app");
		new BBThreeD.Routers.Colors();
        Backbone.history.start();
	}
}