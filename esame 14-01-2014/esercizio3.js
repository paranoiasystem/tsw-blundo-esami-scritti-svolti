function statistica(){
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = riempiTabella;
	httpRequest.open("GET", "xml.xml", true);
	httpRequest.send();
}

function riempiTabella () {
	if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var type = httpRequest.getResponseHeader("Content-Type");
		// Check type so we don't get HTML documents in the future
		if (type.indexOf("xml") !== -1 && httpRequest.responseXML)
			alert('xml');
		else if (type === "application/json")
			alert('json');
		else
			alert('text');
		var xmlDoc = httpRequest.responseXML;
		var response=xmlDoc.getElementsByTagName("anno");
		var anno=response[0].text;
		alert(anno);
	}
}