//Bebidas Calientes
async function menu() {
    const response = await fetch('../menu.json');
    const menu = await response.json();
    bebidasCalientes(menu.bebidasCalientes);
    bebidasFrias(menu.bebidasFrias);
    emparedados(menu.sandwichesYSaltados)
    frappes(menu.frappes)
    batidos(menu.smoothiesYBatidos)
    sodas(menu.sodasItalianas)
    postres(menu.postres)
}
//BEBIDAS
async function bebidasCalientes(bebidasCalientes) {
    const data = bebidasCalientes;
    const containerCardCafe = document.querySelector('#bebidasCalientes');

    containerCardCafe.innerHTML = '';

    data.forEach(cafe => {
        const cardCafe = document.createElement('div');
        cardCafe.className = 'cardCafes';

        cardCafe.innerHTML = `
            <div class="imagen">
                <img src="${cafe.imagen}" alt="${cafe.nombre}">

                <span class="etiquetaCafe">${cafe.etiqueta}</span>

                <button 
                    type="button"
                    class="verCafe"
                    aria-label="Ver ingredientes de ${cafe.nombre}">
                    <img src="img/svg/carbon_view.svg" alt="">
                </button>
            </div>

            <div class="textosCard">
                <p class="categoriaCafe">${cafe.categoria}</p>
                <h3>${cafe.nombre}</h3>

                <div class="pieCard">
                    <div class="precio">
                        <span>PRECIO</span>
                        <p>${cafe.precio}</p>
                    </div>

                    <span class="lineaDecorativa"></span>
                    <span class="tipoCafe">${cafe.tipo}</span>
                </div>
            </div>
        `;

        // Mostrar los ingredientes al presionar el botón
        cardCafe.querySelector('.verCafe').addEventListener('click', () => {
            mostrarIngredientes(cafe);
        });

        containerCardCafe.appendChild(cardCafe);
    });
}
async function bebidasFrias(bebidasFrias) {
    const data = bebidasFrias;
    const containerCardCafe = document.querySelector('#frias');

    containerCardCafe.innerHTML = '';

    data.forEach(cafe => {
        const cardCafe = document.createElement('div');
        cardCafe.className = 'cardCafes';

        cardCafe.innerHTML = `
            <div class="imagen">
                <img src="${cafe.imagen}" alt="${cafe.nombre}">

                <span class="etiquetaCafe">${cafe.etiqueta}</span>

                <button 
                    type="button"
                    class="verCafe"
                    aria-label="Ver ingredientes de ${cafe.nombre}">
                    <img src="img/svg/carbon_view.svg" alt="">
                </button>
            </div>

            <div class="textosCard">
                <p class="categoriaCafe">${cafe.categoria}</p>
                <h3>${cafe.nombre}</h3>

                <div class="pieCard">
                    <div class="precio">
                        <span>PRECIO</span>
                        <p>${cafe.precio}</p>
                    </div>

                    <span class="lineaDecorativa"></span>
                    <span class="tipoCafe">${cafe.tipo}</span>
                </div>
            </div>
        `;

        // Mostrar los ingredientes al presionar el botón
        cardCafe.querySelector('.verCafe').addEventListener('click', () => {
            mostrarIngredientes(cafe);
        });

        containerCardCafe.appendChild(cardCafe);
    });
}
async function frappes(frappes) {
    const data = frappes;
    const containerCardCafe = document.querySelector('#frappes');

    containerCardCafe.innerHTML = '';

    data.forEach(cafe => {
        const cardCafe = document.createElement('div');
        cardCafe.className = 'cardCafes';

        cardCafe.innerHTML = `
            <div class="imagen">
                <img src="${cafe.imagen}" alt="${cafe.nombre}">

                <span class="etiquetaCafe">${cafe.etiqueta}</span>

                <button 
                    type="button"
                    class="verCafe"
                    aria-label="Ver ingredientes de ${cafe.nombre}">
                    <img src="img/svg/carbon_view.svg" alt="">
                </button>
            </div>

            <div class="textosCard">
                <p class="categoriaCafe">${cafe.categoria}</p>
                <h3>${cafe.nombre}</h3>

                <div class="pieCard">
                    <div class="precio">
                        <span>PRECIO</span>
                        <p>${cafe.precio}</p>
                    </div>

                    <span class="lineaDecorativa"></span>
                    <span class="tipoCafe">${cafe.tipo}</span>
                </div>
            </div>
        `;

        // Mostrar los ingredientes al presionar el botón
        cardCafe.querySelector('.verCafe').addEventListener('click', () => {
            mostrarIngredientes(cafe);
        });

        containerCardCafe.appendChild(cardCafe);
    });
}
async function batidos(batidos) {
    const data = batidos;
    console.log(data)
    const containerCardCafe = document.querySelector('#batidos');

    containerCardCafe.innerHTML = '';

    data.forEach(cafe => {
        const cardCafe = document.createElement('div');
        cardCafe.className = 'cardCafes';

        cardCafe.innerHTML = `
            <div class="imagen">
                <img src="${cafe.imagen}" alt="${cafe.nombre}">

                <span class="etiquetaCafe">${cafe.etiqueta}</span>

                <button 
                    type="button"
                    class="verCafe"
                    aria-label="Ver ingredientes de ${cafe.nombre}">
                    <img src="img/svg/carbon_view.svg" alt="">
                </button>
            </div>

            <div class="textosCard">
                <p class="categoriaCafe">${cafe.categoria}</p>
                <h3>${cafe.nombre}</h3>

                <div class="pieCard">
                    <div class="precio">
                        <span>PRECIO</span>
                        <p>${cafe.precio}</p>
                    </div>

                    <span class="lineaDecorativa"></span>
                    <span class="tipoCafe">${cafe.tipo}</span>
                </div>
            </div>
        `;

        // Mostrar los ingredientes al presionar el botón
        cardCafe.querySelector('.verCafe').addEventListener('click', () => {
            mostrarIngredientes(cafe);
        });

        containerCardCafe.appendChild(cardCafe);
    });
}
async function sodas(sodas) {
    const data = sodas;
    console.log(data)
    const containerCardCafe = document.querySelector('#sodas');

    containerCardCafe.innerHTML = '';

    data.forEach(cafe => {
        const cardCafe = document.createElement('div');
        cardCafe.className = 'cardCafes';

        cardCafe.innerHTML = `
            <div class="imagen">
                <img src="${cafe.imagen}" alt="${cafe.nombre}">

                <span class="etiquetaCafe">${cafe.etiqueta}</span>

                <button 
                    type="button"
                    class="verCafe"
                    aria-label="Ver ingredientes de ${cafe.nombre}">
                    <img src="img/svg/carbon_view.svg" alt="">
                </button>
            </div>

            <div class="textosCard">
                <p class="categoriaCafe">${cafe.categoria}</p>
                <h3>${cafe.nombre}</h3>

                <div class="pieCard">
                    <div class="precio">
                        <span>PRECIO</span>
                        <p>${cafe.precio}</p>
                    </div>

                    <span class="lineaDecorativa"></span>
                    <span class="tipoCafe">${cafe.tipo}</span>
                </div>
            </div>
        `;

        // Mostrar los ingredientes al presionar el botón
        cardCafe.querySelector('.verCafe').addEventListener('click', () => {
            mostrarIngredientes(cafe);
        });

        containerCardCafe.appendChild(cardCafe);
    });
}
function mostrarIngredientes(cafe) {
    const modal = document.querySelector('#modalIngredientes');
    const contenido = document.querySelector('#contenidoIngredientes');

    contenido.innerHTML = `
            <img src="${cafe.imagen}" alt="${cafe.nombre}">
            <div class="texto">
             <h3>${cafe.nombre}</h3>
             <p class='desc'>${cafe.descripcion}</p>
        <p>Ingredientes de esta bebida</p>

        <ul>
            ${(cafe.ingredientes || []).map(ingrediente => `
                <li>${ingrediente}</li>
            `).join('')}
        </ul>
            </div>
       
    `;

    modal.classList.add('activo');
}

function mostrarIngredientesP(postre) {
    const modal = document.querySelector('#modalIngredientesP');
    const contenido = document.querySelector('#contenidoIngredientesP');

    if (!modal || !contenido) {
        console.error('No se encontró el modal o su contenido.');
        console.log('Modal:', modal);
        console.log('Contenido:', contenido);
        return;
    }

    contenido.innerHTML = `
        <img src="${postre.imagen}" alt="${postre.nombre}">

        <div class="texto">
            <h3>${postre.nombre}</h3>
            <p class="desc">${postre.descripcion}</p>
            <p class="tituloIngredientes">Ingredientes principales</p>

            <ul>
                ${(postre.ingredientes || []).map(ingrediente => `
                    <li>${ingrediente}</li>
                `).join('')}
            </ul>
        </div>
    `;

    modal.classList.add('activo');
}
// Cerrar modal de postres
const modalPostres = document.querySelector('#modalIngredientesP');
const cerrarPostres = modalPostres.querySelector('.cerrarModal');

cerrarPostres.addEventListener('click', () => {
    modalPostres.classList.remove('activo');
});

// Cerrar al hacer clic fuera del contenido
modalPostres.addEventListener('click', (event) => {
    if (event.target === modalPostres) {
        modalPostres.classList.remove('activo');
    }
});
// Cerrar modal con el botón
document.querySelector('.cerrarModal').addEventListener('click', () => {
    document.querySelector('#modalIngredientesP').classList.remove('activo');
});

// Cerrar al hacer clic fuera del contenido
document.querySelector('#modalIngredientesP').addEventListener('click', (event) => {
    if (event.target.id === 'modalIngredientesP') {
        event.currentTarget.classList.remove('activo');
    }
});

const modalIngredientes = document.querySelector('#modalIngredientes');
const cerrarModal = document.querySelector('.cerrarModal');
cerrarModal.addEventListener('click', () => {
    modalIngredientes.classList.remove('activo');
});
modalIngredientes.addEventListener('click', (event) => {
    if (event.target === modalIngredientes) {
        modalIngredientes.classList.remove('activo');
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modalIngredientes.classList.remove('activo');
    }
});
// TABS DE BEBIDAS
const tabs = document.querySelectorAll('.tab');
const panelesBebidas = document.querySelectorAll('.panelBebidas');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(boton => {
            boton.classList.remove('activo');
        });

        tab.classList.add('activo');

        panelesBebidas.forEach(panel => {
            panel.classList.remove('activo');
        });

        const panel = document.getElementById(tab.dataset.target);

        if (panel) {
            panel.classList.add('activo');
        }
    });
});
//EMPAREDADOS
async function emparedados(sandwichesYSaltados) {
    const dataEmp = sandwichesYSaltados;
    console.log(dataEmp)
    const contaienrEmparedado = document.querySelector('#emparedadosId')
    contaienrEmparedado.innerHTML = ''
    dataEmp.forEach(emparedado => {
        const cardEmpa = document.createElement('div')
        cardEmpa.className = ('cardEmparedados')
        cardEmpa.innerHTML = `
        
                <div class="imagenEmparedado">
                    <img src="${emparedado.imagen}" alt="${emparedado.nombre}">

                    <span class="etiquetaEmparedado">${emparedado.etiqueta}</span>


                </div>

                <div class="contenidoEmparedado">
                    <div class="encabezadoEmparedado">
                        <span class="numeroEmparedado">${emparedado.categoria}</span>
                    </div>

                    <h3>${emparedado.nombre}</h3>
                    <div class="pieEmparedado">
                        <div class="precioEmparedado">
                            <span>PRECIO</span>
                            <p>${emparedado.precio}</p>
                        </div>
                        <a href="#" class="btnEmparedado" aria-label="Ver detalles del emparedado de pollo">
                            <img src="img/svg/carbon_view.svg" alt="">
                        </a>
                    </div>
                </div>
        
        `
        const btnEmparedado = cardEmpa.querySelector('.btnEmparedado');
        btnEmparedado.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarIngredientesP(emparedado);
        });
        contaienrEmparedado.appendChild(cardEmpa)
    });
}
//POSTRES
async function postres(reposteria) {
    const dataPos = reposteria;
    console.log(dataPos)
    const contaienrPostre = document.querySelector('#contPostres')
    contaienrPostre.innerHTML = ''
    dataPos.forEach(postre => {
        const cardPostre = document.createElement('div')
        cardPostre.className = ('cardPostre')
        cardPostre.innerHTML = `
                        <div class="imagenPos">
                            <img src="${postre.imagen}" alt="">
                        </div>
                        <div class="textosPos">
                            <h3>${postre.nombre}</h3>
                            <div class="precioVer">
                                <div class="precio">
                                    <span>Precio</span>
                                    <p class="total">${postre.precio}</p>
                                </div>
                                <a href="#" class="btnPostre" aria-label="Ver detalles del emparedado de pollo">
                                    <img src="img/svg/carbon_view.svg" alt="">
                                </a>
                            </div>
                        </div>
        
        `
        const btnPostre = cardPostre.querySelector('.btnPostre');
        btnPostre.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarIngredientesP(postre);
        });
        contaienrPostre.appendChild(cardPostre)
    });
}

menu();