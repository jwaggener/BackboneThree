BBThreeD.Routers.Colors = Backbone.Router.extend({
	routes: {

	   "": "index"
	},

	index: function() {
		console.log("routing to index");
	   new BBThreeD.Views.Main();
	}
})