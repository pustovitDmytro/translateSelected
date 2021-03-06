window.text ={};

function SetPopup(text){
	var srcfolder = text.img.folder+'/';
	var selectItem = document.getElementById("selected-text");
	selectItem.querySelector(".text").innerHTML = text.selected;	
	flag = selectItem.querySelector(".flag");
	flag["src"]=srcfolder+text.fromLan+".png";
	flag["alt"] = text.fromLan;
	var translatedItem = document.getElementById("translated-text");
	translatedItem.querySelector(".text").innerHTML = text.translated;
	flag = translatedItem.querySelector(".flag");
	flag["src"]=srcfolder+text.toLan+".png";
	flag["alt"] = text.toLan;
};

self.port.on("selection", function(obj) {
  text.selected = obj.text;
  text.toLan=obj.Lang;
  text.img = {folder:obj.folder};
  if(text.translated) SetPopup(text);
});

self.port.on("translation", function(response){
	text.translated = response.text[0];
	text.fromLan = response.detected["lang"];
	if(text.selected) SetPopup(text);
});
function GoTo(option){
	var link = '';
	Item = document.getElementById("popup-text");
	text = {
		fromLan: Item.querySelector("#selected-text > .flag").getAttribute("alt"),
		toLan: Item.querySelector("#translated-text > .flag").getAttribute("alt"),
		selected:Item.querySelector("#selected-text > .text").innerHTML
	}
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