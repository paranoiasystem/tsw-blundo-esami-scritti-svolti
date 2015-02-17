function statistica (codAlb) {
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = riempiTabella;
	httpRequest.open("GET", "getDati.php?codAlb=" + codAlb, true);
	httpRequest.send();
}

function riempiTabella(){
	if (httpRequest.status == 200 && httpRequest.readyState == 4){
		var rootNode = httpRequest.responseXML.getElementsByTagName('response')[0].childNodes;
		document.getElementsByTagName('th')[0].data = rootNode.childNodes[0].data;
		
		for(var x in rootNode){
			
		}

		coloraPunteggio();
	}
}

function coloraPunteggio(){
	var ptElements = document.getElementsByClassName('pt');
	//var length = ptElements.length;
	//for(var i=0; i<length; i++) if (ptElements[i].firstChild.data < 6) ptElements[i].style.background = "red"; else if (ptElements[i].firstChild.data >= 6) ptElements[i].style.background = "green";
	for(var y in ptElements) if(ptElements[y].firstChild.data < 6) ptElements[y].style.background = "red"; else if (ptElements[y].firstChild.data >= 6) ptElements[y].style.background = "green";
}