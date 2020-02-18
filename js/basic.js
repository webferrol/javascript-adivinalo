"use strict";
/*
* Función que quita los espacios adicionales
* a un String, por ejemplo " Xurxo           González    "
* lo deja en "Xurxo González"
*
* @param String: cadena a limpiar
* @return String: cadena liberado de espacios adicionales
*
*/

const limpiarEspaciosAdicionales=cadena=>{
	let primerBlanco = /^ /
	let ultimoBlanco = / $/
	let variosBlancos = /[ ]+/g   //g significa global 
	// "g" fai que reemplácese tódalas coindencias e non só unha: 
	// u sexa reemplazará en tódolos lugares que haxa un o máis espazos
	//
	// "+" Busca el carácter precedente 1 o más veces. Es equivalente a {1,}.

	//replace
	cadena = cadena.replace(variosBlancos," ");//onde exista un o máis espazos o sustituímos por un
	cadena = cadena.replace(primerBlanco,"");//ao principio de cadea un espazo llo quitamos
	cadena = cadena.replace(ultimoBlanco,"");//ao final de cadea un espazo llo quitamos
	return cadena;
};


/*
* Función que comprueba si nos llega una variable vacía, nula o undefined
*
* @param String: cadena de texto a evaluar
* @return boolean: true si es "",null o undefined
*
*/
const estaVacio=texto=>	texto==""||texto==null||texto==undefined||texto.length==0||/^\s*$/.test(texto);

/*
* Función que comprueba si utilizamos un carácter alfabético letra
*
* @param String: caracter a evaluar
* @return boolean true si es un caracter alfabético válido
*
*/
const esCaracterAlfabetico=texto => /^[A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]$/.test(texto);