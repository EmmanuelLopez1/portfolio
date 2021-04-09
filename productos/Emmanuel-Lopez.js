

/*
let btn = document.getElementById("btn").addEventListener("click", () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let numeros = document.getElementById("numeros").value;

  if (num1 == "" || num2 == "" || numeros == "") {
    alert("Ingresa todos los campos");
  } else {
    for (let i = 1; i <= numeros; i++) {
      if (i % num1 === 0 && i % num2 === 0) {
        creadNodo("fizzBuzz")
      } else if (i % num1 === 0) {
        creadNodo("fizz")
      } else if (i % num2 === 0) {
        creadNodo("buzz")
      } else {
        creadNodo(i)
      }
    }
  }
});

function creadNodo(name) {
  nodo = document.createElement("p");
  nodo.innerHTML = name;
  document.getElementById("resultado").appendChild(nodo);
}
*/


function Simulador() {
  this.contador = 0;
  this.boton = document.querySelector(".boton")
  this.presupuesto = document.getElementById("presupuesto")
  this.restante = document.getElementById("restante")
  this.contenedor = document.getElementById("productos")
  this.product = document.getElementsByClassName("product")
  this.parrafo = document.createElement("p")
  this.productos = [
    {
      name:"Hilux",
      precio:300000
    },
    {
      name:"Mazda",
      precio:100000
    },
    {
      name:"italika",
      precio:20000
    },
    {
      name:"mercurio",
      precio: 5000
    },
    {
      name:"boleto transporte publico",
      precio:50
    }
  ]
  
  let datos = pedirDatos.bind(this)
  let filtrar = filtrarProductos.bind(this)
  let mostrar = mostrarProductos.bind(this)
  datos()

  function pedirDatos(){
    this.boton.addEventListener("click",()=>{
    this.presupuesto = this.presupuesto.value
    this.presupuesto = parseInt(this.presupuesto)
    this.restante.innerHTML = this.presupuesto
    filtrar(this.presupuesto)
    })
  }

  
  function filtrarProductos(dinero) {
    for(let i in this.productos){
      i = parseInt(i)
      if(dinero >= this.productos[i].precio){
        this.contador++;
        mostrar(i);
      } 
      else if(i === this.productos.length - 1){
        return alert("no tienes dinero para comprar mas")
      }   
    }
    let selectP = seleccionarProductos.bind(this)
    selectP(dinero)
  }
  
  function mostrarProductos(posicion) {
    let producto = document.createElement("p")
    producto.setAttribute("id", posicion)
    producto.setAttribute("class", "product")
    producto.innerHTML = `${this.productos[posicion].name} $ ${this.productos[posicion].precio}`;
    this.contenedor.appendChild(producto)
  }
  
  
  function seleccionarProductos(presupuesto){
    for(let i = 0; i < this.product.length;i++){
      this.product[i].addEventListener("click",()=>{
        let id = this.product[i].id
        let rest = restarCantidad.bind(this)
        rest(id, presupuesto)
      })
    }
  }



function restarCantidad(id, presupuesto) {
  console.log(presupuesto)
  let total = presupuesto - this.productos[id].precio
  this.restante.textContent = total;
  let mostrarC = mostrarCompra.bind(this)
  mostrarC(id)
  let eliminar = eliminarElementos.bind(this)
  eliminar(this.contador)
  filtrar(total)
}

function mostrarCompra(id) {
  let compras = document.getElementById("compras")
  let compra = document.createElement("p")
  compra.innerHTML = `FELICIDADES HAZ COMPRADO ${this.productos[id].name} con valor de ${this.productos[id].precio}`
  console.log(compras)
  compras.appendChild(compra)
}

function eliminarElementos(cant) {
  console.log(cant)
  for(let i = 0; i <cant;i++){
    this.contenedor.removeChild(this.product[0])
  }
  this.contador = 0
}
}


const simular = new Simulador();