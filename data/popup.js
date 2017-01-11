
function SetPopup(text){
	var textItem = document.getElementById("popup");
	textItem.innerHTML = text;
}

self.port.on("selection", function(text) {
  SetPopup(text)
});

function getTranslate(text){

}