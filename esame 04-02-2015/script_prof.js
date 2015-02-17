var lockClick = false;

function info(modello) {
	if(!lockClick){
		lockClick=true;
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = mostraDiv;
		httpRequest.open("GET", "getData.php?m=" + modello, true);
		httpRequest.send();
	}
}

function mostraDiv(){
	if (httpRequest.readyState == 4 && httpRequest.status == 200) {
		var printDiv = document.getElementById('due');
		printDiv.innerHTML = "";
		printDiv.style.display = 'block';
		var responseNode = httpRequest.responseXML.getElementsByTagName('response')[0].childNodes;
		//var length = responseNode.length;
		//for(var i=0; i<length; i++)
		//	alert(responseNode[i].firstChild.data);
		var data = "<p>Bici Selezionata</p>Modello <span>" + responseNode[0].firstChild.data + "</span><br>Mis. 27 <span>" + responseNode[1].firstChild.data + "</span><br>Mis. 29 <span>" + responseNode[2].firstChild.data + "</span>";
		printDiv.innerHTML = data;
		window.setTimeout(nascondi, 5000);
	}
}

function nascondi(){
	document.getElementById('due').style.display = 'none';
	lockClick = false;
}
