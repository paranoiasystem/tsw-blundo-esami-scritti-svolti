function statistica(){
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = riempiTabella;
	httpRequest.open("GET", "getDati.php?anno=2003", true);
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
		var childs = xmlDoc.getElementsByTagName('response')[0].childNodes;
		var anno = childs[0].innerHTML; 
		alert(anno);
	}
}