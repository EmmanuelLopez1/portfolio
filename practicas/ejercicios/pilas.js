class Stack {
    constructor() {
        this.items = {};
        this.top = 0;
    }

    push(data) {
        this.top++;
        this.items[this.top] = data;

    }

    pop() {
        let deleteData;
        if (this.top) {
            deleteData = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deleteData;
        }
    }

    getsize() {
        return this.top;
    }

    isEmpty() {
        if (!this.getsize()) {
            return true;
        } else {
            return false
        }
    }

    peek() {
        if (this.isEmpty() == true) {
            return "La pila esta vacia";
        } else {
            return this.items[this.top];
        }
    }

    print() {
        if (this.isEmpty() == true) {
            return "La pila esta vacia";

        }
        let result = '';
        for (let i = 3; i > 0; i--) {
            result += this.items[i] + ' ';
        }

        return result;
    }
}

    let expInf;
    let expresion = new Stack();
    let pila = new Stack();



expInf = prompt("Ingresa una expresion matematica basica");
reescribirExpresion(expInf);
let expresionFinal = convertirStringNumero(expresion.items);
calcularResultado(expresionFinal);

function reescribirExpresion(expresion) {
    let nuevaExpresion = "";
    let reGex = /[0-9]/;
    let flat;
    for (let i = 0; i < expresion.length; i++) {
        if (expresion[i] != "(") {
            nuevaExpresion += expresion[i];
        } else if (flat == true) {
            nuevaExpresion += "*" + expresion[i];
        } else {
            nuevaExpresion += expresion[i];
        }

        if (reGex.test(expresion[i])) {
            flat = true;
        } else {
            flat = false;
        }


    }
    convertirEnArreglo(nuevaExpresion);
}

function convertirEnArreglo(expresion) {
    let miExpresion = "";
    let regEx = /[0-9]/;
    let arreglo = [];
    let flat = true;
    let contador = 0;
    for (let i in expresion) {
        if (regEx.test(expresion[i])) {
            if (flat == false) {
                miExpresion = "";
            }
            miExpresion += expresion[i];
            flat = true;
            if (i == expresion.length - 1) {
                arreglo[contador] = miExpresion;
            }
        } else {
            if (flat == true) {
                arreglo[contador] = miExpresion;
                contador++;
            }
            arreglo[contador] = expresion[i];
            contador++;
            flat = false;
        }
    }
    recorrerExpresionInf(arreglo);
}

function recorrerExpresionInf(expresionFinal) {
    for (let i = 0; i < expresionFinal.length; i++) {
        esOperador(expresionFinal[i]);
        if (i == expresionFinal.length - 1) {
            vaciarPila();
        }
    }
}

function esOperador(operador) {
    let reGex = /[0-9]/;

    if (reGex.test(operador)) {
        expresion.push(operador);
    } else {
        compararExpresiones(operador);
    }

}


function compararExpresiones(valor) {
    if (valor == "(") {
        pila.push(valor);
    } else if (valor == ")") {
        parentesisDer();
    } else {
        if (pila.isEmpty()) {
            pila.push(valor);
        } else {
            establecerPiroridad(valor);
        }

    }
}

function establecerPiroridad(operador) {
    let jerarquiaOperador;
    let jerarquiaPila;
    if (operador == "+" || operador == "-") {
        jerarquiaOperador = 2;
    } else {
        jerarquiaOperador = 1;
    }

    if (pila.items[pila.top] == "+" || pila.items[pila.top] == "-") {
        jerarquiaPila = 2;
    } else if (pila.items[pila.top] == "*" || pila.items[pila.top] == "/") {
        jerarquiaPila = 1;
    } else {
        jerarquiaPila = 0;
    }

    if (jerarquiaOperador == 1 && jerarquiaPila == 2) {
        pila.push(operador);
    } else if (jerarquiaOperador == 2 && jerarquiaPila == 2 || jerarquiaOperador == 2 && jerarquiaPila == 1 || jerarquiaOperador == 1 && jerarquiaPila == 1) {
        expresion.push(pila.items[pila.top]);
        pila.pop();
        establecerPiroridad(operador);
    } else {
        pila.push(operador);
    }
}

function parentesisDer(valor) {
    if (pila.items[pila.top] == "(") {
        pila.pop();
    } else {
        expresion.push(pila.items[pila.top]);
        pila.pop();
        parentesisDer(valor);
    }
}

function vaciarPila() {
    if (!pila.isEmpty()) {
        expresion.push(pila.items[pila.top]);
        pila.pop();
        vaciarPila();
    }
}

function convertirStringNumero(arregloDeStrings) {
    let reGex = /\w/;
    let arregloDeNumeros = [];
    for (let i in arregloDeStrings) {
        let contador = i - 1;
        if (reGex.test(arregloDeStrings[i])) {
            arregloDeNumeros[contador] = parseInt(arregloDeStrings[i]);
        } else {
            arregloDeNumeros[contador] = arregloDeStrings[i];
        }
    }

    return arregloDeNumeros;
}

console.log(expresionFinal);

function calcularResultado(expresionFinal) {
    let numero1, numero2, operador, resultado, posicion;
    for (let i = 0; i < expresionFinal.length; i++) {
        if (isNaN(expresionFinal[i]) == false) {
            if (isNaN(expresionFinal[i + 1]) == false) {
                if (isNaN(expresionFinal[i + 2]) == true) {
                    numero1 = expresionFinal[i];
                    numero2 = expresionFinal[i + 1];
                    operador = expresionFinal[i + 2];
                    switch (operador) {
                        case "+":
                            resultado = numero1 + numero2;
                            break;
                        case "-":
                            resultado = numero1 - numero2;
                            break;
                        case "*":
                            resultado = numero1 * numero2;
                            break;
                        case "/":
                            resultado = numero1 / numero2;
                            break;
                    }
                    posicion = i;
                    insertarResultado(resultado, posicion);


                    if (expresionFinal.length >= 3) {
                        calcularResultado(expresionFinal);
                    }
                }
            }
        }
    }
}

function insertarResultado(resultado, posicion) {
    expresionFinal[posicion] = resultado;
    recorrerElemetos(posicion);
}

function recorrerElemetos(posicion) {
    posicion += 1;
    for (let i = posicion; i < expresionFinal.length; i++) {
        expresionFinal[posicion] = expresionFinal[posicion + 2];
        posicion++;
    }
    expresionFinal.length = expresionFinal.length - 2;
}