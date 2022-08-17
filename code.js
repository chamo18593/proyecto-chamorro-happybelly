const menu=[
    {
        codigo:"111111",
        nombre:"donas rosas",
        precio:"$200",
        tipo:"dulce",
    },
    {
        codigo:"111112",
        nombre:"Donas con Chocolate",
        precio:"$200",
        tipo:"dulce",
    },
    {
        codigo:"111113",
        nombre:"Waffles",
        precio:"$400",
        tipo:"dulce",
    },
    {
        codigo:"111114",
        nombre:"Cookies con chips ",
        precio:"$200",
        tipo:"dulce",
    },
    {
        codigo:"111115",
        nombre:"Brownie",
        precio:"$300",
        tipo:"dulce",
    },
    {
        codigo:"111116",
        nombre:"Budin de vainilla",
        precio:"$150",
        tipo:"dulce",
    },
    {
        codigo:"111117",
        nombre:"Budin de chocolate",
        precio:"$150",
        tipo:"dulce",
    },
    {
        codigo:"111118",
        nombre:"Pan de campo",
        precio:"$200",
        tipo:"salado",
    },
    {
        codigo:"111119",
        nombre:"Bizcochitos de grasa",
        precio:"$200",
        tipo:"salado",
    },
    {
        codigo:"111120",
        nombre:"Chipa",
        precio:"$100",
        tipo:"salado",
    },
    {
        codigo:"111121",
        nombre:"croissant con jyq",
        precio:"$400",
        tipo:"salado",
    },
    ];

    const carrito=[];

    const contenedor = document.getElementById('muestra');
        
    
    for (let producto in menu) {
            contenedor.innerHTML +=
            `<div class="card producto" style="width: 16rem;">
             <div class="card-body">
              <h5 class="card-title producto-item">${menu[producto].nombre}</h5>
              <p class="card-text producto-item">${menu[producto].precio}</p>
              <button id="miBoton" class="btn btn-primary">Comprar</button>
            </div>
          </div>`
    }


    
let miBoton=document.getElementById("miBoton");

miBoton.onclick = () => {
    console.log("Agregaste donas rosas al carrito");
    carrito.push();
}

miBoton.onmouseout = () => {
    miBoton.className="btn btn-primary";
}

    const agregarProducto = (producto, precio, tipo) => {
        menu[producto] = {
            'nombre': producto,
            'precio': precio,
            'tipo': tipo,
        }
    }




