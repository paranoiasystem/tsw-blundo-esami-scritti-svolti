function statistica(anno){
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = riempiTabella;
	httpRequest.open("GET","xml.xml",true);
	httpRequest.send("");
}

function riempiTabella () {
	if (httpRequest.readyState == 4 && httpRequest.status == 200) {
		var nodo1 = httpRequest.responseXML.documentElement.getElementsByTagName("response");
		var anno = nodo1[0].getElementsByTagName("anno").firstChild.nodeValue;
		var output = '<table id="tb1" border="1"><thead><tr><th colspan="2">' + anno + '</th></tr><tr><th>Mese</th><th>Pioggia<br/>Totale</th></tr></thead><tbody></tbody></table>';
		document.body.innerHTML = output;
	}
}