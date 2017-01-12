text = {};

function SetPopup(text){
	var textItem = document.getElementById("popup-text");
	textItem.innerHTML = text.selected+'- '+text.translated;
}

self.port.on("selection", function(selected) {
  text.selected = selected;
  if(text.translated) SetPopup(text);
});

self.port.on("translation", function(response){
	text.translated = response.text[0];
	text.toLan = 'uk'
	text.fromLan = response["lang"];
	if(text.selected) SetPopup(text);
});
