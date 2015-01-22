function menu(settimana) {
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = riempiMezzo;
	httpRequest.open("GET","getDati.php?week=1&type=xml",true);
	httpRequest.send("");
}

function riempiMezzo(){
	if (httpRequest.readyState == 4 && httpRequest.status == 200) {
		if (httpRequest.responseXML){
			var childs = httpRequest.responseXML.getElementsByTagName('response')[0].childNodes;
			for (var i = 0; i < childs.length; i++) stampa(childs[i].tagName, childs[i].innerHTML);
		}
	}
}

function stampa(id, value){
	var x = document.getElementById(id);
	x.innerHTML = value;
}