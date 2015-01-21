function creaCookie(){
	var scadenza = new Date();
	var now = new Date();
	scadenza.setTime(now.getTime() + (4 * 60000)); //durata 4 giorni dal 6 al 10
	document.cookie = 'METEO' + '=' + 'SALERNO' + '; expires=' + scadenza + ': path=' + 'METEO.COM/SUD'
}