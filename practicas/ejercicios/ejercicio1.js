// arreglo = [1, 2, "2", 4, "5", "10", 100, 0, -50];

// function numeros(l) {
//     var arreglo2 = l.filter(Number.isInteger);
//     console.log(arreglo2);
// }

// numeros(arreglo);

/*var cadena = "adios";

if (cadena[0] == "a") {
    console.log("exito perras")
}
*/

/*
let c = 568;
let potencia = 0;
let valores = [];
let valorMaximo;
let binario = "";

do {
    valorMaximo = Math.pow(2, potencia);

    if (valorMaximo <= c) {
        valores[potencia] = valorMaximo;
        potencia++;
    }

} while (valorMaximo < c);

if (valorMaximo > c) {
    valorMaximo = 0;

}

for (let i = valores.length; i >= 0; i--) {
    if (valorMaximo == c) {
        valores[i] = 0;
    } else if (valorMaximo < c) {
        if (valorMaximo + valores[i] <= c) {
            valorMaximo += valores[i];
            valores[i] = 1;
        } else if (valorMaximo + valores[i] > c) {
            valores[i] = 0;
        }
    }
}



binario = valores.reverse().toString();
binario = binario.replace(/,g/, "");


console.log(binario);
*/

/*function addBinary(a, b) {
    return (a + b).toString(2)
}
*/

/*

function addBinary(a, b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
        var res = c % 2 + res;
        c = Math.floor(c / 2);
    }
    return res;
}

console.log(addBinary(99, 555));
*/


/*
function addBinary(a, b) {
    let c = a + b;
    return (c).toString(2);
}

console.log(addBinary(5, 10));

*/

/*

function addBinary(a, b) {
    var sum = a + b;
    var binary = [];
    var x = 0,
        y = 0;
    y = sum;
    while (y > 1) {
        x = y % 2;
        y = Math.floor(y / 2);
        binary.push(x);
    };
    binary.push(y);
    return binary.reverse().join("");
}
console.log(addBinary(6, 70));
*/

//NOTACION POSFIJA



//FACTORIAL

/*
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

factorial(5);
*/

/*
function tickets(peopleInLine) {
    let bills25 = 0,
        bills50 = 0,
        bills100 = 0;
    let seguirVendiendo = "YES";

    for (let i = 0; i < peopleInLine.length; i++) {
        console.log(peopleInLine[i]);
        if (peopleInLine[i] == 25) {
            bills25++;
        } else if (peopleInLine[i] == 50) {
            bills50++;
            if (bills25 > 0) {
                bills25--;
            } else {
                seguirVendiendo = "NO";
            }
        } else if (peopleInLine[i] == 100) {
            bills100++;
            if (bills25 > 0 && bills50 > 0) {
                bills25--;
                bills50--;
            } else if (bills25 >= 3) {
                bills25 = -3;
            } else {
                seguirVendiendo = "NO";
            }
        }
    }

    return seguirVendiendo;


}

console.log(tickets([25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100, 25, 25, 50, 100]));
*/


/*function nbYear(p0, percent, aug, p) {
    let porcentaje = percent / 100;
    let years = 0;
    let porPersonas = 0;
    do {
        porPersonas = p0 * porcentaje;
        p0 += porPersonas;
        p0 += aug;
        years++;
    } while (p0 < p);

    return years;
}
console.log(nbYear(1500, 5, 100, 5000));

*/

/*
function findUniq(arr) {
    let contador = 0;
    let num = arr[0],
        num2;

    for (let i = 0; i < arr.length; i++) {
        if (num == arr[i] && i > 0) {
            contador++;
        } else {
            num2 = arr[i];
        }
    }

    if (contador == 0) {
        return num;
    } else {
        return num2;
    }


}


console.log(findUniq([1, 1, 3, 1, 1, 1]));
*/

//AHORRANDO COMPUTO
/*
function factorial(n) {

    if (!this.cache) {
        this.cache = {};
    }


    if (this.cache[n]) {
        return this.cache;
    }

    if (n === 1) {
        return 1;
    }



    this.cache[n] = n * factorial(n - 1);

    return this.cache[n];
}

factorial(6);
*/


//ECMASCRIPT

//parametros por defecto
/*
function funcionNormal(nombre, edad, pais) {
    var nombre = nombre || 'Baby';
    var edad = edad || 23;
    var pais = pais || "Mexico";

    console.log(nombre, edad, pais);
}

funcionNormal();



function funcionECMASCRIPT(name = "Ricardo", apellido = "Milos", edad = 34) {
    console.log(name, apellido, edad);
}

funcionECMASCRIPT();

let loremNormal = "Lorem ipsum dolor sit amet consectetur" +
    "adipisicing elit. Autem, beatae vero voluptatem " +
    "vitae tempore sunt neque recusandae repudiandae " +
    "numquam dolorum accusamus quam dignissimos enim! Adipisci aperiam ipsa earum minima id";

let loremECMASCRIPT = `Deja de mentirte, 
la foto que subiste con el diciendo que era tu cielo
bebe yo te concozco tan bien que se que fue pa darme celos`;

console.log(loremECMASCRIPT);

//DESECTRUTURACION DE OBJETOS;
let objeto = {
    name: 'Maluma',
    apellido: "Baby",
    age: 23
}

console.log(objeto.name, objeto.apellido, objeto.age);

let { name, apellido, age } = objeto;
console.log(name, apellido);


//OPERADOR DE PROPAGACION.

let team1 = ["Maxo", "Pablo Acosta", "Maluma"];
let team2 = ["Jose", "Benjamin Arellano", "JBalvin"];

let team3 = ['David', ...team1, ...team2];
console.log(team3);

//PARAMETROS REST
function rest(...parametros) {
    for (let i = 0; i < parametros.length; i++) {
        console.log(parametros[i]);
    }
}

rest("Maluma", "Baby baby", "pretty boy", 23, "Colombia baby");

//OBJETOS MEJORADOS


let nombre = "oscar";
let age = 22;

obj = {
    name: nombre,
    age: age
}

obj2 = {
    nombre,
    age
}

console.log(obj2);

*/

// ARROW FUNCTIONS.

let names = [
    { name: "Oscar", age: 32 },
    { name: "Maluma", age: 25 }
];

let ListOfNames = names.map(function(item) {
    console.log(item.name);
});

let ListOfNames2 = names.map(item => console.log(item.name));

//CLASES MODULOS Y GENERADORES.

class baby {
    constructor() {
        this.a = 0;
        this.b = 0;
    }

    sumarBaby(a, b) {
        this.a = a;
        this.b = b;
        return this.a + this.b;
    }

}

let malumaBaby = new baby();
console.log(malumaBaby.sumarBaby(5, 7));

//MODULOS
//Sirve para separar codigo de la pagina principal de javascript.

const hello = require('./programacionDinamica.js');
candy();

//GENERADORES

function* chenchoCorleone() {
    if (true) {
        yield "BadBunny Baby";
    }
    if (true) {
        yield "ieieieie";
    }
}

const hello = chenchoCorleone();

console.log(hello.next().value);
console.log(hello.next().value);




//ECMASCRIPT 7
let numbers = [1, 2, 3, 4, 5, 6, 7];
if (numbers.includes(100)) {
    console.log("si se encuentra el valor 7");
} else {
    console.log("no se encuentra");
}

let base = 4;
let exponente = 3;
let result = base ** exponente;
console.log(result);

//ECMASCRIPT 8
//ENTRIES (PERMITE TRANSFORMAR UN OBJETO EN UNA MATRIZ).

const matriz = {
    prettyBoy: 'baby',
    baby: 'ozuan',
    paQueSepa: 'darell'
}

const matriz2 = Object.entries(matriz);
console.log(matriz2);
console.log(matriz2.length);

const matriz = {
    prettyBoy: 'baby',
    baby: 'ozuan',
    paQueSepa: 'darell'
}

const baby = Object.values(matriz);
console.log(baby);
console.log(baby.length);


const string = "baby";

console.log(string.padStart(11, 'Maluma '))
console.log(string.padEnd(9, ' baby'));
console.log("pasa las horas y mas me pide mas".padEnd(91, 'no se canza parece no tener final, lo nuestro es una locura'));

//ECMASCRIPT 9

const obj = {
    name: 'maxo',
    age: 21,
    country: 'MX',
};

let { name, ...all } = obj;
console.log(all);

const obj1 = {
    ...obj,
    country: 'MX',
    pretty: 'Boy baby'
};

console.log(obj1);

//ECMASCRIPT 10
let Array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(Array.flat(0));

//eliminar los espacios en blanco de un string.

let hello = 'baby baby';
console.log(hello);
console.log(hello.trimStart());