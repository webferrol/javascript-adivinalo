/*
* Función que retorna un número aleatorio
* @param max Entero. Número máximo que puede retornar
* @param min Entero. Número mínimo que puede reornar
* @return Entero. Número retornado
*/
const getAleatorio=(max,min) => Math.floor(Math.random() * ((max+1) - min)) + min;

// Botón que al ser pulsado genera un aleatorio
document.querySelector("#b_generar").addEventListener("click", (e)=>{
	
    let array=[]; //Creo un array vacío
    let TAM = 10; //Tamaño del array
	for(let i=0;i<TAM;i++){
		
		array.push(getAleatorio(10,0));
	}
	alert(array.join());
});

/*
* Ejercicio 2. Aleatorio
**/
let elTextAleatorio = document.querySelector("#aleatorio");
let tirada,numeroAleatorio,tiradas=[]; //número de tiradas para jugar. El tope es 10
let primerClick = true; //switch que me permite saber si es el primer click de ejercicio para empezar el juego
const TOPE = 10;

const playReset=()=>{
	primerClick = false;
	tirada = 0;
	tiradas=[];
	numeroAleatorio = getAleatorio(100,1);
	console.log(numeroAleatorio);
	document.querySelector("#msg_aleatorio").innerHTML="";
	document.querySelector("#serie_aleatorio").innerHTML="";
}
/*
* Función que retorna un valor booleano en donde se comprueba si se acertó el número
* @param número insertado en el control de texto
* @return Bool. Si devuelve true se acertó el número en caso negativo retorna falso
*/
const esElNumero=(valor)=>{
	tirada++;
	valor = (valor.length===0)?"0":valor;
	tiradas.push(valor);
	document.querySelector("#serie_aleatorio").innerHTML = tiradas.join("-");
	if(isNaN(valor)){
		document.querySelector("#msg_aleatorio").innerHTML=`La tirada ${valor} no es válido (Tiradas: ${tirada})`;
		return false;
	}else if(valor>numeroAleatorio){
		document.querySelector("#msg_aleatorio").innerHTML=`${valor} Demasiado alto (Tiradas: ${tirada})`;
		return false;
	}else if(valor<numeroAleatorio){
		document.querySelector("#msg_aleatorio").innerHTML=`${valor} Demasiado bajo (Tiradas: ${tirada})`;
		return false;
	}
	document.querySelector("#msg_aleatorio").innerHTML=`${valor} EUREKA!!! (Tiradas: ${tirada})`;	
	return true;
}
//capturo el click del ejercicio
document.getElementById("b_aleatorio").addEventListener("click",()=>{
	let bool;//almaceno es valor booleano si se acertó el número o no acertó
	if(primerClick)
		playReset();
	bool = esElNumero(elTextAleatorio.value);
	if(!bool && tirada===TOPE){
		alert("Se acabó. Perdiste");
		playReset();
	}else if(bool){
		alert("ganaste");
		playReset();
	}

});





/*
* Función que crea un mensaje en el cuerpo del documento html
* @param objeto que produjo el evento
* @param string. nombre de clase que se creará al nodo creado para el mesaje
* @param string. mensaje que se quiere mostrar
*/
let crearMensaje=(elTarget,nombreClase,mensaje)=>{
	let elClase = document.querySelector(`.${nombreClase}`);
	if(elClase){//si no existe el objeto devuelve null con lo cual por lógica no puede ser true
		elClase.parentNode.removeChild(elClase);
	}
	let elNuevo = document.createElement("strong");//creo elemento strong
	elNuevo.className = nombreClase;//le añado mensaje
	elNuevo.innerHTML = mensaje; //inserto texto

	elTarget.parentNode.append(elNuevo); //añado mensaje

}

//Ejercicio 3
document.querySelector("#enlace_1").addEventListener("click",e=>{
	e.preventDefault();
	let texto=prompt("Dame texto");
	let minusculas=0,mayusculas=0;

	for(let i=0;i<texto.length;i++){
		if(texto.charAt(i)==" "|| !esCaracterAlfabetico(texto.charAt(i))){
		}else if(texto.charAt(i)==texto.charAt(i).toLowerCase())
			minusculas++;
		else
			mayusculas++;
	}

	crearMensaje(e.target,"ej1",`${texto}: Mayúsculas: ${mayusculas} \r Minúsculas: ${minusculas}`);
});