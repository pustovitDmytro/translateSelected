var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var selection = require("sdk/selection");
var activated = require('sdk/simple-prefs').prefs['activated']
var Request = require("sdk/request").Request;
var apiKey = require("./api.js").key;
tabs.open("https://en.wikipedia.org/wiki/Liverpool_F.C.");

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

var Popup = require("sdk/panel").Panel({
  height: 200,
  contentURL: "./popup.html",
  contentScriptFile: "./popup.js",
  position: button
});

selection.on('select', function () {
  if(activated){
    var toLan = 'uk';
    var Url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" 
    + apiKey + "&lang=" + toLan + "&text=" + selection.text+ "&options=1";
    Request({
      url: Url,
      onComplete: function(response){
        Popup.port.emit("translation",response.json);
      }
    }).get();
    Popup.port.emit("selection",selection.text);
    console.log('Selected : ['+selection.text+'];');
    Popup.show();
  }
});

