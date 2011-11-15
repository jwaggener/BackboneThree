BBThreeD.Views.ThreeD = Backbone.View.extend({
	
	id: "container",
	
	initialize: function(){
		
		_.bindAll( this );
		
		this.camera, this.scene, this.projector, this.renderer;
		this.plane;
	
		this.windowHalfX = window.innerWidth / 2;
		this.windowHalfY = window.innerHeight / 2;
		
		$(document).bind( "click", this.onDocumentMouseDown );
					
	},
	
	render: function(){
		
		this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
		this.camera.position.y = 0;
		this.camera.position.z = 300;
		
		this.scene = new THREE.Scene();
		
		this.projector = new THREE.Projector();
		
		this.renderer = new THREE.CanvasRenderer();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		
		this.plane = new BBThreeD.Views.Plane().render();
		
		$( this.plane ).bind( "hello", this.hello3DWorld );
		
		this.scene.add( this.plane );

		return this.renderer.domElement;
	},
	
	hello3DWorld: function( event, obj, two ){
		obj.object.materials[ 0 ].color.setHex( Math.random() * 0xffffff );
		console.log("hello 3D World");
	},
	
	animate: function() {
		window.requestAnimationFrame( this.animate );
		this.render3d();
	},
	
	render3d: function () {
		this.plane.rotation.y += .05;
		this.renderer.render( this.scene, this.camera );
	},
	
	onDocumentMouseDown: function( event ) {

		event.preventDefault();

		var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
		this.projector.unprojectVector( vector, this.camera );

		var ray = new THREE.Ray( this.camera.position, vector.subSelf( this.camera.position ).normalize() );

		var intersects = ray.intersectObjects( [ this.plane ] );
		
		if ( intersects.length > 0 ) {
			
			$( intersects[0].object ).trigger( "hello", [ intersects[0] ] );

		}

	}
})