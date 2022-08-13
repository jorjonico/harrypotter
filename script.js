// traigo del DOM los elementos del HTML que voy a usar
// Selecto y Div
const divPersonaje = document.getElementById("personajes");
const input1 = document.querySelector('.form select');

// Llamó de manera asincrona mediante fetch a la api con todos los personajes de Harry Potter
async function todosPersonajes() {
    const pers = await fetch('https://hp-api.herokuapp.com/api/characters')
    const persParseados = await pers.json()
    //tomo esta constante que es = pers.json y la recorro con forEach para usar solo los datos que me interesan
    //Nombre del personaje, Casa, imagen y nombre del actor
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
})}

// Llamó de manera asincrona mediante fetch a la api segmentando los estudiantes
async function estudiantes () {
    const estu = await fetch('https://hp-api.herokuapp.com/api/characters/students')
    const estuParseados = await estu.json()
    //tomo esta constante que es = estu.json y la recorro con forEach para usar solo los datos que me interesan
    //Nombre del personaje, Casa, imagen y nombre del actor
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
    })}

// Llamó de manera asincrona mediante fetch a la api segmentando los profesores
async function profesores () {
    const profe = await fetch('https://hp-api.herokuapp.com/api/characters/staff')
    const profeParseados = await profe.json()
    //tomo esta constante que es = profe.json y la recorro con forEach para usar solo los datos que me interesan
    //Nombre del personaje, Casa, imagen y nombre del actor
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
    })}

// Llamó de manera asincrona mediante fetch a la api segmentando las casas
async function mostrarCasa(house){
    const casa = await fetch('https://hp-api.herokuapp.com/api/characters/house/' + house)//concateno link API + hause
    const casaParseados = await casa.json()
    //tomo esta constante que es = casa.json y la recorro con forEach para usar solo los datos que me interesan
    //Nombre del personaje, Casa, imagen y nombre del actor
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
    })}

// Desarrollo el evento del selector, de acuerdo a las opciones de busqueda con un if/ else
// De este modo podemos segmentar la busqueda por Casa/estudiantes/profesores/ o Todo
input1.addEventListener("change", () =>{
    console.log(input1.value);
    if(input1.value == "1"){//opcion todos los personajes
        divPersonaje.innerHTML = ``
        todosPersonajes()
    }
    else if ( input1.value == "6"){//opcion todos los estudiantes
        divPersonaje.innerHTML = ``
        estudiantes ()
    }
    else if ( input1.value == "7"){//opcion todos los profesores
        divPersonaje.innerHTML = ``
        profesores ()
    }
    else if (input1.value == "4"){// por casas
        divPersonaje.innerHTML = ``
        mostrarCasa ("gryffindor")//nombre house
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

estudiantes()