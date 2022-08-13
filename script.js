// traigo del DOM lo selementos del HTML que voy a usar
const divPersonaje = document.getElementById("personajes");
const input1 = document.querySelector('.form select');

// 
/* async function todosPersonajes() {
    const pers = await fetch('http://hp-api.herokuapp.com/api/characters')
    const persParseados = await pers.json()

    persParseados.forEach((persona) => {
        divPersonaje.innerHTML += `
        <div class="card text-center mb-3 productos" style="width: 18rem;">
            <h5 class="card-header">${persona.name}</h5>
            <div class="card-body">
                <p class="card-title">Casa: ${persona.house}</p>
            </div>
            <img src="${persona.image}" class="card-img-top" alt="">
            <rect width="100%" height="100%" fill="#868e96"></rect>
            </img>
            <div class="card-body">
                <p class="card-text">Intérprete: ${persona.actor}</p>
            </div>
        </div>
        `
})} */

function todosPersonajes() {
    fetch(ApiPotter)
    .then(response => response.json())
    .then(data => data.forEach((persona, indice) => {
        divPersonaje.innerHTML += `
        <div class="card text-center card_color productos" id="persona${indice}" style="width: 18rem;">
            <img src="${persona.image}" class="card-img-top" alt="Personaje sin imágen">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${persona.name}</h5>
                <p class="card-text p">Casa: ${persona.house} | Actor: ${persona.actor}</p>
            </div>
        </div>
        `
    }))
}
/* async function estudiantes () {
    const estu = await fetch('http://hp-api.herokuapp.com/api/characters/students')
    const estuParseados = await estu.json()

    estuParseados.forEach((persona) => {
        divPersonaje.innerHTML += `
        <div class="card text-center mb-3 productos" style="width: 18rem;">
            <h5 class="card-header">${persona.name}</h5>
            <div class="card-body">
                <p class="card-title">Casa: ${persona.house}</p>
            </div>
            <img src="${persona.image}" class="card-img-top" alt="">
            <rect width="100%" height="100%" fill="#868e96"></rect>
            </img>
            <div class="card-body">
                <p class="card-text">Intérprete: ${persona.actor}</p>
            </div>
        </div>
        `
    })} */

async function estudiantes (){
    fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then(response => response.json())
    .then(data => data.forEach((persona, indice) => {
        divPersonaje.innerHTML += `
        <div class="card text-center mb-3 productos" style="width: 18rem;">
            <h5 class="card-header">${persona.name}</h5>
            <div class="card-body">
                <p class="card-title">Casa: ${persona.house}</p>
            </div>
            <img src="${persona.image}" class="card-img-top" alt="">
            <rect width="100%" height="100%" fill="#868e96"></rect>
            </img>
            <div class="card-body">
                <p class="card-text">Intérprete: ${persona.actor}</p>
            </div>
        </div>
        `
    }))
}

/* async function profesores () {
    const profe = await fetch('http://hp-api.herokuapp.com/api/characters/staff')
    const profeParseados = await profe.json()

    profeParseados.forEach((persona) => {
        divPersonaje.innerHTML += `
        <div class="card text-center mb-3 productos" style="width: 18rem;">
            <h5 class="card-header">${persona.name}</h5>
            <div class="card-body">
                <p class="card-title">Casa: ${persona.house}</p>
            </div>
            <img src="${persona.image}" class="card-img-top" alt="">
            <rect width="100%" height="100%" fill="#868e96"></rect>
            </img>
            <div class="card-body">
                <p class="card-text">Intérprete: ${persona.actor}</p>
            </div>
        </div>
        `
    })} */

function profesores (){
    fetch('http://hp-api.herokuapp.com/api/characters/staff')
    .then(response => response.json())
    .then(data => data.forEach((persona, indice) => {
            divPersonaje.innerHTML += `
            <div class="card text-center mb-3 productos" style="width: 18rem;">
            <h5 class="card-header">${persona.name}</h5>
            <div class="card-body">
                <p class="card-title">Casa: ${persona.house}</p>
            </div>
            <img src="${persona.image}" class="card-img-top" alt="">
            <rect width="100%" height="100%" fill="#868e96"></rect>
            </img>
            <div class="card-body">
                <p class="card-text">Intérprete: ${persona.actor}</p>
            </div>
            </div>
            `
    }))
}

/* async function mostrarCasa(house){
    const casa = await fetch('http://hp-api.herokuapp.com/api/characters/house/' + house)
    const casaParseados = await casa.json()

    casaParseados.forEach((persona) => {
        divPersonaje.innerHTML += `
        <div class="card text-center mb-3 productos" style="width: 18rem;">
            <h5 class="card-header">${persona.name}</h5>
            <div class="card-body">
                <p class="card-title">Casa: ${persona.house}</p>
            </div>
            <img src="${persona.image}" class="card-img-top" alt="">
            <rect width="100%" height="100%" fill="#868e96"></rect>
            </img>
            <div class="card-body">
                <p class="card-text">Intérprete: ${persona.actor}</p>
            </div>
        </div>
        `
    })} */

function mostrarCasa(house){
    fetch('http://hp-api.herokuapp.com/api/characters/house/' + house)
    .then(response => response.json())
    .then(data => data.forEach((persona, indice) => {
        divPersonaje.innerHTML += `
        <div class="card text-center mb-3 productos" style="width: 18rem;">
            <h5 class="card-header">${persona.name}</h5>
            <div class="card-body">
                <p class="card-title">Casa: ${persona.house}</p>
            </div>
            <img src="${persona.image}" class="card-img-top" alt="">
            <rect width="100%" height="100%" fill="#868e96"></rect>
            </img>
            <div class="card-body">
                <p class="card-text">Intérprete: ${persona.actor}</p>
            </div>
        </div>
        `
    }))
}


// desarrollo el evento del selector, deacuerdo a las opciones de busqueda con un if/ else
input1.addEventListener("change", () =>{
    console.log(input1.value);
    if(input1.value == "1"){
        divPersonaje.innerHTML = ``
        todosPersonajes()
    }
    else if ( input1.value == "6"){
        divPersonaje.innerHTML = ``
        estudiantes ()
    }
    else if ( input1.value == "7"){
        divPersonaje.innerHTML = ``
        profesores ()
    }
    else if (input1.value == "4"){
        divPersonaje.innerHTML = ``
        mostrarCasa ("gryffindor")
    }
    else if (input1.value == "2"){
        divPersonaje.innerHTML = ``
        mostrarCasa ("hufflepuff")
    }
    else if (input1.value == "5"){
        divPersonaje.innerHTML = ``
        mostrarCasa ("ravenclaw")
    }
    else if (input1.value == "3"){
        divPersonaje.innerHTML = ``
        mostrarCasa ("slytherin")
    }
})

estudiantes ()
