//Bebidas Calientes
async function menu() {
    const response = await fetch('../menu.json');
    const menu = await response.json();
    bebidasCalientes(menu.bebidasCalientes);
    emparedados(menu.sandwichesYSaltados)
}
//BEBIDAS CALIENTES
async function bebidasCalientes(bebidasCalientes) {
    const data = bebidasCalientes
    const containerCardCafe = document.querySelector('#bebidasCalientes')
    containerCardCafe.innerHTML = '';
    data.forEach(cafe => {
        const cardCafe = document.createElement('div')
        cardCafe.className = ('cardCafes')
        cardCafe.innerHTML = `
        <div class="imagen">
                            <img src="${cafe.imagen}" alt="${cafe.nombre}">
                            <span class="etiquetaCafe">${cafe.etiqueta}</span>

                            <a href="#" class="verCafe" aria-label="Ver detalles de ${cafe.nombre}">
                                <img src="img/svg/carbon_view.svg" alt="">
                            </a>
                        </div>

                        <div class="textosCard">
                            <p class="categoriaCafe">${cafe.categoria}</p>

                            <h3>${cafe.nombre}</h3>

                            <p class="descripcionCafe">
                                ${cafe.descripcion}
                            </p>

                            <div class="pieCard">
                                <div class="precio">
                                    <span>PRECIO</span>
                                    <p>${cafe.precio}</p>
                                </div>

                                <span class="lineaDecorativa"></span>

                                <span class="tipoCafe">${cafe.tipo}</span>
                            </div>
                        </div>
        `
        containerCardCafe.appendChild(cardCafe)
    });
}
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
        contaienrEmparedado.appendChild(cardEmpa)
    });
}



menu();