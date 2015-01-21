function creaCookie(){
	var scadenza = new Date();
    scadenza.setDate(10);
    scadenza.setMonth(2);
    scadenza.setFullYear(2014);
	document.cookie = 'METEO' + '=' + 'SALERNO' + '; expires=' + scadenza + ': path=' + 'METEO.COM/SUD'
}