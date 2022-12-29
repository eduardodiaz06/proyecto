const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const loginIncorrecto = document.querySelector("#logint")
const verFormulario = document.querySelector(".container-login")
const cerrarSesion = document.querySelector("#logout")
const inicioSesionBoton = document.querySelector("#boton-inicio")

//funcion para subir valores al local storage
//convertir un valor con JSON.stringify
//una clave que le proporcione un nombre a ese valor que se suba


const datosUsuario = {
    user: "eduardo",
    pass: "lalo123"
}

const subiralLs = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor))


}


const obtenerDelLs = (clave) => {
    return JSON.parse(localStorage.getItem(clave))

}



formLogin.onsubmit = (event) => {
    event.preventDefault()
    if (inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.pass) {
        subiralLs("login", true)
        verFormulario.style.display = "none"
       

    }else{
        loginIncorrecto.style.display = "block"
        inputUser.style.border= "1px solid red"
        inputPass.style.border= "1px solid red"
    }


}

function validarLogin (clave) {
    if (clave  !== true){
        verFormulario.style.display = "flex"
    }else {
        verFormulario.style.display = "none"
        inicioSesionBoton.style.display = "none"
        cerrarSesion.style.display = "block"
    }

}

validarLogin(obtenerDelLs("login"))