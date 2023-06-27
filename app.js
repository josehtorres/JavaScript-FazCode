//Ejemplo de como desplegar mensaje en el navegador

/*document.write(
    '<h1> Hello World Jose</h1>'
); 
*/

//tipos de datos
//String

console.log("Hello World") //String

//Numbers
console.log(100000)
console.log(-2.3)

//boolean
true
false

//array
console.log(["jose","carlos","mario"])  //lista de string
console.log([1,2,3])
console.log([true,false,false,true])

//object  representacion abastracta de un objeto en la vida real
//par clave:valor


console.log(
    {
      "username": "jose",
      "score": 70.4,
      "hours": 14,
      "proffesional": true
    },

    {
        "username": "carlos",
        "score": 0.4,
        "hours": 1,
        "proffesional": false
    }
)

//VARIABLES
//alcance de las variables 


var username = "jose";
let lastname = "torres";
const PI = 3.1415


console.log(username)
console.log(lastname)
console.log(PI)


//OPERADORES

let numberone = 10;
let numbertwo = 20;

let resultado = numberone + numbertwo;

console.log(resultado);


let nombre = "jose";
let apellido = "torres";

let completeName = nombre + " " + apellido
console.log(completeName);

let result = numberone > numbertwo;
console.log(result);

let passwordDB = "pepe123";
let input = "asdfgh";

let validar = input == passwordDB;
console.log(validar);


//CONDICIONALES
// if

if (validar == true){
    console.log("Login correcto");
}else{
    console.log("Login Incorrecto");
}

//Validar multiples valores con if

let score = 70;

if (score > 30){
    console.log("Necesitas practicar mas...");
} 
else if (score > 15){
    console.log("Estas mejorando");
}
else{
    console.log(" Necesitas ver este tutorial");
}


//switch

let typeCard = "Tarjeta Debito";

switch(typeCard){
    case "Tarjeta Debito":
        console.log("Esta es una tarjeta debito");
        break;
    case "Tarjeta Credito":
        console.log("Esta es una tarjeta Credito");
        break;
    default:
        console.log("No tiene tarjeta");

}

// BUCLES
//Iterador WHILE

let contador = 50;

while(contador > 0){
    console.log("Hola Mundo");
    //contador = contador - 1; 
    contador--;
}

// Iterador FOR

let nombres = ["jose", 'carlos','mario','luis'];
console.log(nombres[2]);
console.log(nombres.length);

for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

//FUNCIONES

function saludar(name) {
    //console.log(name);
    console.log('Hola' + ' ' + name);
     
}

saludar("Maria");
saludar("Gonzalo");


function sumar(n1, n2){
    console.log(n1 + n2);

}

sumar(1,3);
sumar(2, 5);


// ESTUDIAR EL DOM DEL NAVEGADOR DOCUMENT OBJECT MODEL

//ESTUDIAR NODEJS

// APIS HTML5


seminario

https://www.menti.com/ampaanvvzc