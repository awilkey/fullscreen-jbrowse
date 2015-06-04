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
	
		thisBrowser.afterMilestone('initView', function() {
	
			var myMenu = thisBrowser.menuBar;
			
        	console.log( "fullscreen plugin starting" );

			myMenu.appendChild(makeFull);
		
		})
        
		console.log( "fullscreen plugin added" );
	},

    makeFullscreenButton: function () {
	
	var goFull = function(){
		var ele = document.body;
		// Recent api changes mean that browser might be looking for Fullscreen
		// or FullScreen

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
