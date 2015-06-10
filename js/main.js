define([
           'dojo/_base/declare',
           'dojo/query',

	   	   'dijit/form/Button',
           'JBrowse/Plugin'
       ],
       function(
           declare,
           query,
	   	   
		   dijitButton,
           JBrowsePlugin
       ) {
return declare( JBrowsePlugin,
{
    constructor: function( args ) {
		
		var thisBrowser = this.browser;
        var makeFull = this.makeFullscreenButton();
		
		if (!document.mozFullScreenEnabled 
			&& !document.webkitFullScreenEnabled 
			&& !document.webkitFullscreenEnabled
			&& !document.msFullScreenEnabled
			&& !document.msFullscreenEnabled
			&& !document.fullScreenEnabled
			&& !document.fullscreenEnabled
		   ){
				console.log("fullscreen is not supported by your browser.");
				return;
			}

		thisBrowser.afterMilestone('initView', function() {
	
			var myMenu = thisBrowser.menuBar;
			
        	console.log( "fullscreen plugin starting" );

			myMenu.appendChild(makeFull);
		
		})
        
		console.log( "fullscreen plugin added" );
	},

    makeFullscreenButton: function () {
	
	var goFull = function(){
		var ele = document.getElementById("GenomeBrowser");
		var doc = document;
		// Recent api changes mean that browser might be looking for Fullscreen
		// or FullScreen 


	
		if(		!doc.fullscreen
			&& 	!doc.fullScreen	
			&& 	!doc.msFullscreenElement 
			&& 	!doc.msFullScreenElement
			&& 	!doc.mozFullScreen
			&& 	!doc.webkitFullscreenElement
			&& 	!doc.webkitFullScreenElement){

			console.log("entering fullscreen");
			
			if (ele.requestFullScreen){
				ele.requestFullScreen();
			} else if (ele.requestFullscreen){
				ele.requestFullscreen();
			} else if (ele.msRequestFullScreen){
				ele.msRequestFullScreen();
			} else if (ele.msRequestFullscreen){
				ele.msRequestFullscreen();
			} else if (ele.mozRequestFullScreen){
				ele.mozRequestFullScreen();
			} else if (ele.webkitRequestFullScreen){
				ele.webkitRequestFullScreen();
			} else if (ele.webkitRequestFullscreen){
				ele.webkitRequestfullscreen();
			}
		// If already fullscreen toggle
		 } else {
		 	
		 	console.log("closing fullscreen");
		 	
		 	if (doc.exitFullScreen){
		 		doc.exitFullScreen();
		 	} else if (doc.exitFullscreen){
		 		doc.exitFullscreen();
		 	} else if (doc.msExitFullScreen){
		 		doc.msExitFullScreen();
		 	} else if (doc.msExitFullscreen){
		 		doc.msExitFullscreen();
		 	} else if (doc.mozCancelFullScreen){
		 		doc.mozCancelFullScreen();
		 	} else if (doc.webkitExitFullScreen){
		 		doc.webkitExitFullScreen();
		 	} else if (doc.webkitExitFullscreen){
		 		doc.webkitExitFullscreen();
			}
		 }
	};

	var selectFullButton = new dijitButton({
		className :"fullscreen-button",
		innerHTML:"Fullscreen",
		title: "Enable Fullscreen",
		onClick : function(){
	
			goFull();
		
		}
	});

	return selectFullButton.domNode;
    }
}); 
});
