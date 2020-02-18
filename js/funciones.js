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
	let bool;//almaceno es valor booleano si se acertó el número o no
	if(primerClick)
		playReset();
	bool = esElNumero(elTextAleatorio.value);
	if(!sw && tirada===TOPE){
		alert("Se acabó. Perdiste");
		playReset();
	}else if(sw){
		alert("ganaste");
		playReset();
	}

});