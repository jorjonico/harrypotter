const ApiPotter = 'http://hp-api.herokuapp.com/api/characters';
const divPersonaje = document.getElementById("personajes");
const input1 = document.querySelector('.form select');

async function todosPersonajes() {
    const pers = await fetch(ApiPotter)
    const persParseados = await pers.json()
    persParseados.forEach((persona, indice) => {
        divPersonaje.innerHTML += `
        <div class="card text-center card_color productos" id="persona${indice}" style="width: 18rem;">
            <img src="${persona.image}" class="card-img-top" alt="Personaje sin imágen">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${persona.name}</h5>
                <p class="card-text p">Casa: ${persona.house} | Actor: ${persona.actor}</p>
            </div>
        </div>
        `
})}

/* function personajesTodos () {
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
} */
function estudiantes (){
    fetch('http://hp-api.herokuapp.com/api/characters/students')
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

function mostrarCasa(house){
    fetch('http://hp-api.herokuapp.com/api/characters/house/' + house)
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

function profesores (){
    fetch('http://hp-api.herokuapp.com/api/characters/staff')
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

input1.addEventListener("change", () =>{
    console.log(input1.value);
    if(input1.value == "Todos"){
        divPersonaje.innerHTML = ``
        todosPersonajes()
    }
    else if ( input1.value == "Estudiantes"){
        divPersonaje.innerHTML = ``
        estudiantes ()
    }
    else if ( input1.value == "Profesores"){
        divPersonaje.innerHTML = ``
        profesores ()
    }
    else if (input1.value == "Gryffindor"){
        divPersonaje.innerHTML = ``
        mostrarCasa ("gryffindor")
    }
    else if (input1.value == "Hufflepuff"){
        divPersonaje.innerHTML = ``
        mostrarCasa ("hufflepuff")
    }
    else if (input1.value == "Ravenclaw"){
        divPersonaje.innerHTML = ``
        mostrarCasa ("ravenclaw")
    }
    else if (input1.value == "Slytherin"){
        divPersonaje.innerHTML = ``
        mostrarCasa ("slytherin")
    }
    else if (input1.value == "Seleccionar una opción"){
        divPersonaje.innerHTML = `<p>Seleccionar una opción</p>`
    }
})

todosPersonajes()
