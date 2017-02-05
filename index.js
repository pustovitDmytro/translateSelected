var buttons = require('sdk/ui/button/action');
var data = require("sdk/self").data;
var selection = require("sdk/selection");
var Request = require("sdk/request").Request;
var apiKey = require("./api.js").key;
var preferences = require("sdk/simple-prefs").prefs;
var activated = require('sdk/simple-prefs').prefs['activated'];
var icoType = require('sdk/simple-prefs').prefs['flag'];
var LangTo = require('sdk/simple-prefs').prefs['LangTo'];

require("sdk/simple-prefs").on("LangTo", function(){
  LangTo=preferences.LangTo;
});
require("sdk/simple-prefs").on("activated",  function(){
  activated=preferences.activated;
  button.icon = (activated)?{
    "16": "./toolbar/16-a.png",
    "32": "./toolbar/32-a.png",
    "64": "./toolbar/64-a.png"
  }:{
    "16": "./toolbar/16-n.png",
    "32": "./toolbar/32-n.png",
    "64": "./toolbar/64-n.png"
  };
});
require("sdk/simple-prefs").on("flag",  function(){
  icoType=preferences.flag;
});

var button = buttons.ActionButton({
  id: "button",
  label: "translate selected",
  icon:  {
    "16": "./toolbar/16-n.png",
    "32": "./toolbar/32-n.png",
    "64": "./toolbar/64-n.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  activated=!activated;
  button.icon = (activated)?{
    "16": "./toolbar/16-a.png",
    "32": "./toolbar/32-a.png",
    "64": "./toolbar/64-a.png"
  }:{
    "16": "./toolbar/16-n.png",
    "32": "./toolbar/32-n.png",
    "64": "./toolbar/64-n.png"
  };
}

var Popup = require("sdk/panel").Panel({
  width: 225,
  height: 130,
  contentURL: "./popup/popup.html",
  contentScriptFile: "./popup/popup.js",
  position: button
});

selection.on('select', function () {
  if(activated){
    var Url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" 
    + apiKey + "&lang=" + LangTo + "&text=" + selection.text+ "&options=1";
        Request({
      url: Url,
      onComplete: function(response){
        Popup.port.emit("translation",response.json);
        console.log(response.json);
      }
    }).get();

    Popup.port.emit("selection",{text:selection.text, Lang:LangTo, folder:icoType});
    console.log(icoType);
    console.log('Selected : ['+selection.text+']; lang = '+LangTo);
    Popup.show();
  }
});

