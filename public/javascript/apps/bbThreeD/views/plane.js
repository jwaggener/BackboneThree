BBThreeD.Views.Plane = Backbone.View.extend({
	
	/* backbone view object for a simple double-sided plane*/
	
	initiate: function(){
		this.position = this.options.position || { x:0, y:0, z:0 };
		this.dimensions = this.options.dimensions || { width:200, height:200 };
		this.plane;
	},
	
	render: function(){
		
		this.plane = new THREE.Mesh( new THREE.PlaneGeometry( 200, 200 ), new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, shininess:0, opacity:1 } ) );
		//this.plane.rotation.x = - 90 * ( Math.PI / 180 );
		this.plane.doubleSided = true;
		this.plane.overdraw = true;
		
		return this.plane;
	}
	
})