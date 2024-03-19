const venta1 = {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: "<img src='https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg'></img>",
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: true }


    const articulosSection = document.querySelector(".venta")
    articulosSection.innerHTML = `
    <article class="venta">
    <img>${venta1.src}</img>
    <h4>${venta1.nombre}</h4>
    <p>${venta1.descripcion}</p>
    <p>${'<i class="fas fa-bed"></i>' + venta1.ubicacion}</p>
    <p>${venta1.habitaciones + " Habitaciones |"}</p> 
    <p>${venta1.baños}</p> 
    <h4>${"$" + venta1.costo}</h4>
    <a href="/producto/${venta1.id}"><button>Ver más</button></a>
    </article>
    `;