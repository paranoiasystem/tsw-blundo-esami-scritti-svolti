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
		var xmlDoc = httpRequest.responseXML;
		var childs = xmlDoc.getElementsByTagName('response')[0].childNodes;
		var data = "<p>Bici Selezionata</p>Modello <span>" + childs[0].innerHTML + "</span><br>Mis. 27 <span>" + childs[1].innerHTML + "</span><br>Mis. 29 <span>" + childs[2].innerHTML + "</span>";
		printDiv.innerHTML = data;
		window.setTimeout(nascondi, 5000);
	}
}

function nascondi(){
	document.getElementById('due').style.display = 'none';
	lockClick = false;
}
