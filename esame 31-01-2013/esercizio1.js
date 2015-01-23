//array dei valori -- uso le razze di cane dato che non so le squadre di serie A
var cani = ['Pastore Tedesco', 'Border Collie', 'Labrador', 'Levriero', 'Akita', 'Alano'];

var selectUno = document.getElementById('selectUno');

var selectDue = document.getElementById('selectDue');

function riempiLista(){
	for (var i = 0; i < cani.length; i++) {
		var optionItem = document.createElement("option");
		optionItem.value = optionItem.text = cani[i]; 
		selectUno.appendChild(optionItem);
	}
}

function spostaSinistra(){
	if (selectUno.value) {
		var optionItem = document.createElement("option");
		optionItem.value = optionItem.text = selectUno.value;
		selectDue.appendChild(optionItem);
		selectUno.removeChild(selectUno.childNodes[selectUno.selectedIndex]);
	} else alert('seleziona un valore prima');	
}

function spostaDestra(){
	if (selectDue.value) {
		var optionItem = document.createElement("option");
		optionItem.value = optionItem.text = selectDue.value;
		selectUno.appendChild(optionItem);
		selectDue.removeChild(selectDue.childNodes[selectDue.selectedIndex]);
	} else alert('seleziona un valore prima');
}