# fullscreen-jbrowse
Fullscreen plugin for JBrowse

This plugin adds a button that allows jbrowse to be viewed fullscreen.
If using with iframes, you will need to configure the iframe to allow fullscreen
view.

Should be compatible with:
| Browser | Supported Version|
|---------|------------------|
| Chrome | 20+ |
| Firefox | 10.0 + |
| IE | 11 + |
|Safari | 5.1 + |
|Opera | 21.10 + |

Note that this plugin is provided as is, with no warranty.

## Known Issues
By default, putting JBrowse into fullscreen will display a black background on
the track view. To fix this, it is suggested adding :

div.outerTrackContainer{
	background-color: rgba{255,255,255,1};
}

to your main.css


