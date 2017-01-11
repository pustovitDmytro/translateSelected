var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var selection = require("sdk/selection");
var activated = require('sdk/simple-prefs').prefs['activated']

var button = buttons.ActionButton({
  id: "button",
  label: "translate selected",
  icon:  {
    "16": "./16-n.png",
    "32": "./32-n.png",
    "64": "./64-n.png"
  },
  onClick: handleClick
});

var Popup = require("sdk/panel").Panel({
  height: 200,
  contentURL: "./popup.html",
  contentScriptFile: "./popup.js",
  position: button
});

tabs.open("https://en.wikipedia.org/wiki/Liverpool_F.C.");

selection.on('select', function () {
  if(activated){
       Popup.port.emit("selection",selection.text);
	console.log('Selected : ['+selection.text+'];');
  	Popup.show();
  }
});

function handleClick(state) {
  activated=!activated;
  button.icon = (activated)?{
    "16": "./16-a.png",
    "32": "./32-a.png",
    "64": "./64-a.png"
  }:{
    "16": "./16-n.png",
    "32": "./32-n.png",
    "64": "./64-n.png"
  }
}
