function tuttiPari(){
	var head  = document.getElementsByTagName('head')[0];
	var fileref = document.createElement("link");
	fileref.setAttribute("rel", "stylesheet");
	fileref.setAttribute("type", "text/css");
	fileref.setAttribute("href", "esercizio1.css");
	head.appendChild(fileref);
}