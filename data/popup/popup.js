window.text ={};

function SetPopup(text){
	var selectItem = document.getElementById("selected-text");
	selectItem.innerHTML = text.selected;
	var translateItem =  document.getElementById("translated-text");
	translateItem.innerHTML=text.translated;
	json = document.getElementById("json");
	json.innerHTML = JSON.stringify(text);
};

self.port.on("selection", function(selected) {
  text.selected = selected;
  if(text.translated) SetPopup(text);
});

self.port.on("translation", function(response){
	text.translated = response.text[0];
	text.toLan = 'uk'
	text.fromLan = response.detected["lang"];
	if(text.selected) SetPopup(text);
});
function GoTo(option){
	var link = '';
	json = document.getElementById("json");
	text = JSON.parse(json.innerHTML);
	switch(option){
		case 'Google': 
			link = "https://translate.google.com.ua/#"+text.fromLan+"/"+text.toLan+"/"+text.selected;
			break;
		case 'Yandex':
			link = "https://translate.yandex.ru/?text="+text.selected+"&lang="+text.fromLan+"-"+text.toLan;
			break;
		case 'Oxford':
			link = "https://en.oxforddictionaries.com/definition/"+text.selected;
			break;
		case 'Lingvo':
			link = "https://www.lingvo.ua/"+text.toLan+"/Translate/"+text.fromLan+"-"+text.toLan+"/"+text.selected;
			break;
	};
	window.open(link);	
}