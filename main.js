class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}
const aros = [];
const pulseras = [];

aros.push(new Producto("Aros Space", 1, 2000, 30));
aros.push(new Producto("Aros Planet", 2, 1400, 10));
pulseras.push(new Producto("Pulsera Infinito", 5, 4000, 20));

for (const aro of aros) {
    alert("ID (" + aro.id + ") - " + aro.nombre);
}
for (const pulsera of pulseras) {
    alert("ID (" + pulsera.id + ") - " + pulsera.nombre);
}


//Funcion precio final de la compra
function calcularPrecio(precioAccesorio, cantidadAccesorio, costoEnvio) {
    return (precioAccesorio * cantidadAccesorio) + costoEnvio;
}

//Solicito al usuario el ID del accesorio
let accesorioSeleccionado = parseInt(prompt("Ingrese el ID del accesorio seleccionado:"));
const aroBuscado = aros.find(aro => aro.id === accesorioSeleccionado);
const pulseraBuscada = pulseras.find(pulsera => pulsera.id === accesorioSeleccionado);

//Solicito cantidad 
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades"));

const envio = 350;

//Salidas de consola indicando el precio final de la compra
if (accesorioSeleccionado <= 0) {
    alert("Ingresa un ID valido");
} else if (accesorioSeleccionado <= 4) {
    alert("El precio final de tu compra es: $" + calcularPrecio(aroBuscado.precio, cantidad, envio));
    alert("¡Gracias!")
    aroBuscado.vender(cantidad);
} else if (accesorioSeleccionado <= 7) {
    alert("El precio final de tu compra es: $" + calcularPrecio(pulseraBuscada.precio, cantidad, envio));
    alert("¡Gracias!")
    pulseraBuscada.vender(cantidad);
} else {
    alert("Ingresa un ID valido");
}