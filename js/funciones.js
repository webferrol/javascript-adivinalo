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