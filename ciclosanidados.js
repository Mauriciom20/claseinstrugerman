/*CICLOS - FINAL
Parte 1:
Usted es contratado por la empresa BioGenetics S.A. para crear un conjunto de programas de
experimentación para su unidad de desarrollo e investigación llamada LabSADN (Laboratorio de
Secuenciación del ADN). Como ellos saben que usted no es un experto conocedor del tema, ellos le dicen
que no se preocupe, que para crear los programas solamente necesita saber lo siguiente:
El ADN es la sigla de Ácido DesoxirriboNucleico, el cual es el material que almacena toda la
información genética de un ser vivo.
La información en el ADN se almacena como un código compuesto por cuatro bases químicas:
Adenina (A), Timina (T), Citosina (C) y Guanina (G), para formar unidades llamadas pares de bases.
https://medlineplus.gov/spanish/genetica/entender/basica/adn/
Para resolver el literal b, y hacer una selección aleatoria de las dos bases solicitadas, básese en el
siguiente artículo: https://www.w3schools.com/js/js_random.asp
Cristiana, una joven investigadora del LabSADN, necesita un conjunto de programas que le ayuden a
generar e imprimir cadenas de ADN de una longitud indicada por ella y además que dichas cadenas
cumplan ciertas condiciones. Cada uno de los siguientes puntos debe ser un programa diferente.
a. La cadena está formada por una única base: Adenina (A), Timina (T), Citosina (C) o Guanina (G),
según se indique al momento de ejecutar el programa.
b. La cadena tiene únicamente dos de las cuatro bases (seleccionadas aleatoriamente) y ubicadas en
cualquier posición y orden dentro de la cadena.
c. La cadena tiene una longitud múltiplo de 10 y la distribución de las bases debe respetar que: la
cantidad de Citosina (C) es cuatro veces la cantidad de Guanina, Timina (T) es dos veces la cantidad de
Guanina y Adenina (A) es tres veces la cantidad de Guanina. La cadena debe tener cuatro bases.
El programa debe garantizar que el usuario ingrese una longitud múltiplo de 10. Si esta condición no se
cumple, el programa debe informar y solicitar nuevamente los datos.*/

/*function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

const adenina = "A";//1
const citosina = "C";//2
const guanina = "G";//3
const timina = "T";//4

let baseSolicitada1 = random(1, 4);
console.log(`b1: ${baseSolicitada1}`);
let baseSolicitada2 = random(1, 4);
console.log(`b2: ${baseSolicitada2}`);

if (baseSolicitada1 >= 1 && baseSolicitada1 <= 4){
    baseSolicitada1 == 1? baseSolicitada1 = adenina : baseSolicitada1 == 2? baseSolicitada1 = citosina : baseSolicitada1 == 3? baseSolicitada1 = guanina : baseSolicitada1 == 4? baseSolicitada1 = timina
: "ERROR"};

if (baseSolicitada2 >= 1 && baseSolicitada2 <= 4){
    baseSolicitada2 == 1? baseSolicitada2 = adenina : baseSolicitada2 == 2? baseSolicitada2 = citosina : baseSolicitada2 == 3? baseSolicitada2 = guanina : baseSolicitada2 == 4? baseSolicitada2 = timina
: "ERROR"};

let programaQueSeDeseaEjecutar = prompt("Ingresa el programa que desea ejecutar(1(cadena de una base), 2(cadena de 2 bases) o 3(cadena de 4 bases))");

switch(parseInt(programaQueSeDeseaEjecutar)) {
    case 1:{
        let longitudCadenaA = parseInt(prompt("indique la longitud de la cadena"));
        let cadenaA = baseSolicitada1;

        for (let index = 1; index < longitudCadenaA; index++) {
            cadenaA = cadenaA + baseSolicitada1;
        }
        console.log(`La cadena ejecuta: `, cadenaA);
        break;
    }
    case 2:{
        let longitudCadenaB = parseInt(prompt("indique la longitud de la cadena"));
        let cadenaB1 = baseSolicitada1;
        let cadenaB2 = baseSolicitada2;
        let cadenaB = ""
        for (let index = 1; index < longitudCadenaB; index++) {
            cadenaB1 = cadenaB1 + baseSolicitada1;
            cadenaB2 = cadenaB2 + baseSolicitada2;
            cadenaB = (cadenaB1 + cadenaB2)
        }
        
        console.log(`La cadena ejecuta: `, cadenaB);
    break;
    }
    case 3:{
        let longitudCadenaC = parseInt(prompt("indique la longitud de la cadena"));
        let cadenaC = ""
        if (longitudCadenaC % 10 !== 0) {
            console.log("La longitud debe ser un múltiplo de 10. Por favor, ingresa otra longitud.");
            console.log(longitudCadenaC = parseInt(prompt("indique la longitud de la cadena")))
        } else {
            let cantidadGuanina = longitudCadenaC / 10;
        let cantidadCitosina = 4 * cantidadGuanina;
        let cantidadTimina = 2 * cantidadGuanina;
        let cantidadAdenina = 3 * cantidadGuanina;
        
        for (let i = 0; i < cantidadGuanina; i++) {
            cadenaC += guanina;
        }
        for (let i = 0; i < cantidadCitosina; i++) {
            cadenaC += citosina;
        }
        for (let i = 0; i < cantidadTimina; i++) {
            cadenaC += timina;
        }
        for (let i = 0; i < cantidadAdenina; i++) {
            cadenaC += adenina;
        }
        console.log(`La cadena ejecuta: `, cadenaC);
        }

    break;
    }
    default:
        console.log("Error");
        break;
}*/

/*Parte 2:
Usted es contratado por la empresa SoftwareCorp S.A. para crear un conjunto de funcionalidades de apoyo para el desarrollo de productos.
1. Cree un programa que muestre los números impares entre -100 y n.*/

/*function mostrarImpares(n) {
    for (let i = -100; i <= n; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

mostrarImpares(50);*/

//2. Cree un programa que recorra una cadena y muestre si esta contiene la letra z.

/*function contieneLetraZ(cadena) {
    return cadena.includes('z') || cadena.includes('Z');
}

let cadena1 = "Hola, ¿cómo estás?";
let cadena2 = "La zorra rápida saltó sobre el perro.";
console.log(contieneLetraZ(cadena1));
console.log(contieneLetraZ(cadena2));*/

//3. Cree un programa que pida números al usuario indefinidamente hasta que este ingrese un número divisible entre 9.

/*function pedirNumeros() {
    let numero;
    do {
        numero = parseInt(prompt("Ingrese un número:"));
    } while (numero % 9 !== 0);
    console.log(`El número ${numero} es divisible entre 9.`);
}

pedirNumeros();*/

//4. Construir un programa que reciba un número entero positivo no superior a 1.000.000.000 e indique si el número es primo. Por ejemplo: Dado el número 73 indicar true. Dado el número 35 indicar false.

/*function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

console.log(esPrimo(73));
console.log(esPrimo(35));*/

//5. Se trata de implementar un programa que devuelva la cantidad de ocurrencias del dígito que más se repite en un número entero no negativo. Por ejemplo, para el caso de 343331 el número que más se repite es 3, por ende se debe devolver 4, que es la cantidad de ocurrencias del 3.



//6. Cree un programa que dado un número, determine cuál es el dígito de mayor valor que lo compone. Por ejemplo, dado el número 67259711, el programa debe devolver 9, ya que es el dígito de mayor valor que compone el número.



//7. Cree un programa que valide el registro de un usuario, de tal manera que pida a éste su email y su contraseña, si el email contiene el @ y la contraseña tiene una longitud entre 8 y 15, el programa deberá mostrar “Registro exitoso”, de lo contrario, el programa deberá seguir pidiendo los datos al usuario hasta que se ingresen datos válidos.*/

/*function validarRegistro() {
    let email = ""
    let contrasena = ""
    let encontrado = false;

    do {
        email = prompt("Ingrese su email:");
        encontrado = false;

        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                encontrado = true;
                break;
            }
        }

    } while (!encontrado);

    do {
        contrasena = prompt("Ingrese su contraseña (entre 8 y 15 caracteres):");
    } while (contrasena.length < 8 || contrasena.length > 15);

    console.log("Registro exitoso.");
}

validarRegistro();*/
