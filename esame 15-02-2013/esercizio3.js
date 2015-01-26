var n_click_cookie = 0;
var n_click_update_cookie = 0;
var stampa = document.getElementById('stampa');

function addCookie () {
	n_click_cookie += 1;
	document.cookie = "Cookie_" + n_click_cookie + "=Value_" + n_click_cookie +";";
	ReadCookie();
}

function ReadCookie () {
	stampa.innerHTML = "";
	for (var i = 1; i <= n_click_cookie; i++) {
		if (i>1) stampa.innerHTML += ";";
		var nome = "Cookie_" + i + "=";
		var cookies = document.cookie.split(';');
	  	
	  	for(var j = 0; j < cookies.length; j++) {
	  		var c = cookies[j].trim();
			if (c.indexOf(nome) == 0)
				stampa.innerHTML +=  "Cookie_" + i +"=" + c.substring(nome.length, c.length) + ""; 
	  }
	}
}

function updateCookie () {
	n_click_update_cookie += 1;
	document.cookie = "Cookie_" + n_click_cookie + "=Updated_" + n_click_update_cookie +";";
	ReadCookie();
}