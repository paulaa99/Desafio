const PRODUCTS = [
    { id: 1, name: "Teléfono inteligente", description: "Excelente teléfono, gran pantalla y cámaras." },
    { id: 2, name: "Laptop", description: "Diseño elegante, procesador rápido y gran capacidad de almacenamiento." },
    { id: 3, name: "Audífonos inalámbricos", description: "Calidad de sonido envolvente tanto para música como para llamadas" }
];

//Almacenar el ID de un producto en el localStorage y luego redireccionar al usuario a la página de detalles del producto.



document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("productList");

// Utiliza un bucle para iterar a través de los productos.

for (const product of PRODUCTS) {

// Por cada producto, crea un elemento <li> y un enlace <a>.

 const item = document.createElement("li");
 const link = document.createElement("a");

// Configura el texto del enlace con el nombre del producto.

link.textContent = product.name;

// Agrega un evento de clic al enlace. Cuando se haga clic en un producto,
// deberás almacenar el ID del producto en el localStorage y redireccionar a "product-info.html".

link.addEventListener("click", function () {
    localStorage.setItem("selectedProductID", product.id);
    window.location.href = "product-info.html";
});

// Agrega el enlace al elemento <li> y agrega el <li> a la lista de productos.
  item.appendChild(link);
  productList.appendChild(item)

 }
});