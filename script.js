document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // CATÁLOGO DE PRODUCTOS
    // ==========================

    const contenedor = document.getElementById("grid");

    if (contenedor) {

        const misProductos = [
            { nombre: "Abrigo Lana", precio: "S/ 480", img: "img/abrigolana.jpg" },
            { nombre: "Vestido Lino", precio: "S/ 320", img: "img/vestidolino.webp" },
            { nombre: "Camisa Seda", precio: "S/ 260", img: "img/camisaseda.jfif" },
            { nombre: "Pantalón Sastre", precio: "S/ 290", img: "img/pantalonsastre.webp" },
            { nombre: "Falda Plisada", precio: "S/ 240", img: "img/faldaplisada.jfif" },
            { nombre: "Abrigo Camel", precio: "S/ 260", img: "img/abrigocamel.jpg" },
            { nombre: "Suéter Cashmere", precio: "S/ 520", img: "img/suetercashmere.jfif" },
            { nombre: "Bolso Cuero Negro", precio: "S/ 320", img: "img/bolsocueronegro.jpg" }
        ];

        let contenido = "";

        misProductos.forEach(producto => {

            contenido += `
                <div class="card">
                    <img src="${producto.img}" alt="${producto.nombre}" class="product-img">
                    <h3>${producto.nombre}</h3>
                    <p class="price">${producto.precio}</p>
                </div>
            `;

        });

        contenedor.innerHTML = contenido;

    }

    // ==========================
    // FORMULARIO DE CONTACTO
    // ==========================

    const formulario = document.getElementById("formContacto");

    if (formulario) {

        formulario.addEventListener("submit", function (e) {

            e.preventDefault();

            const parametros = {

                nombre: document.getElementById("nombre").value,
                email: document.getElementById("email").value,
                telefono: document.getElementById("telefono").value,
                asunto: document.getElementById("asunto").value,
                mensaje: document.getElementById("mensaje").value

            };

            emailjs.send(
                "service_ea64i3p",
                "template_1t0ammd",
                parametros
            )

.then(function(response){

    console.log("Correo enviado:", response);

    alert("✅ Mensaje enviado correctamente.");

    formulario.reset();

})

.catch(function(error){

    console.log("Error completo:", error);

    alert("❌ Error: " + JSON.stringify(error));

});

        });

    }

});