BBThreeD.Views.Main = Backbone.View.extend({
	
	initialize: function(){
		console.log("here in the main view");
		_.bindAll( this );
		this.colorExplorer;
		this.render();
	},
	
	render: function(){
		this.colorExplorer = new BBThreeD.Views.ThreeD();
		this.colorExplorer.render();
		$(this.el).html( this.colorExplorer.render() );
		$("body").append(this.el);
		this.colorExplorer.animate();
	}
	
})