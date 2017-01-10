var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./test_ico.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://www.mozilla.org/");
}