define([
           'dojo/_base/declare',
           'dojo/query',

           'dijit/MenuItem',
	   'dijit/form/Button',
           'JBrowse/Plugin'
       ],
       function(
           declare,
           query,
           dMenuItem,
	   dijitButton,
           JBrowsePlugin
       ) {
return declare( JBrowsePlugin,
{
    constructor: function( args ) {
      	var thisDoc = this.document; 
	var thisBrowser = this.browser;
        var makeFull = this.makeFullscreenButton();
	thisBrowser.afterMilestone('initView', function() {
	
		var myMenu = query(".menuBar");
		// do anything you need to initialize your plugin here
        	console.log( "fullscreen plugin starting" );

		console.log("genometest");
		
		thisBrowser.menuBar.appendChild(makeFull);
		})
	},

    makeFullscreenButton: function () {
	
	var goFull = function(){
		var ele = document.body; 
		if (ele.requestFullscreen){
			ele.requestFullScreen();
		} else if (ele.msRequestFullScreen){
			ele.msRequestFullScreen();	
		} else if (ele.mozRequestFullScreen){
			ele.mozRequestFullScreen();
		} else if (ele.webkitRequestFullScreen){
			ele.webkitRequestFullScreen();
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
