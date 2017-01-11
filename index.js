var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var selection = require("sdk/selection");
var button = buttons.ActionButton({
  id: "github-link",
  label: "Visit Github",
  icon: {
    "16": "./test_ico.png"
  },
  onClick: handleClick
});
var myPanel = require("sdk/panel").Panel({
  //width: 180,
  height: 180,
  contentURL: "./popup.html",
  contentScriptFile: "./popup.js"
});

tabs.open("https://en.wikipedia.org/wiki/Liverpool_F.C.");

selection.on('select', function () {
      myPanel.port.emit("selection",selection.text)
	console.log('Selected : ['+selection.text+'];');
  	myPanel.show();
});

function handleClick(state) {
  tabs.open("https://github.com/pustovitDmytro/translateSelected");
}
