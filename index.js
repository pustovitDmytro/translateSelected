var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var selection = require("sdk/selection");
var activated = require('sdk/simple-prefs').prefs['activated']

var button = buttons.ActionButton({
  id: "github-link",
  label: "Visit Github",
  icon:  {
    "16": "./icon-16.png"  
  },
  onClick: handleClick
});

var Popup = require("sdk/panel").Panel({
  height: 200,
  contentURL: "./popup.html",
  contentScriptFile: "./popup.js"
});

tabs.open("https://en.wikipedia.org/wiki/Liverpool_F.C.");

selection.on('select', function () {
       Popup.port.emit("selection",selection.text);
	console.log('Selected : ['+selection.text+'];');
  	Popup.show();
});

function handleClick(state) {
  activated=!activated;
  if(activated) button.icon = {
    "16": "./icon-16.png"  
  };else button.icon = {
    "16": "./test_ico.png"  
  }
}
