import{viewproducts, loginout} from "../Controllers/Firebase.js"

const sesion = document.getElementById('btn-cerrar')
const agregar = document.getElementById('btn-agregar')
const ver =  document.getElementById('vdata')

async function cargar(){
    ver.innerHTML=''
    const docref = viewproducts()
    const querySnapshot = await docref
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id}`);
        ver.innerHTML+=`
            <tr>
            <th scope="row">${doc.id}}</th>
            <th scope="row">${doc.data().codigo}</th>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().descripcion}</td>
            <td>${doc.data().cantidad}</td>
            </tr>
        `
    });
}

export function rediccionarProductos() {
    window.location.href = "Registrar_Products.html";
}

async function cerrarSesion(){
    const verificacion=loginout()
    const comprobar = await verificacion

    .then((comprobar)=>{
        alert('Sesion cerrada')
        window.location.href='../Index.html'
    })
    .catch((error)=>{
        alert('Sesion no cerrada')
    })
}

window.addEventListener('DOMContentLoaded', async()=>{
    cargar()
})

window.addEventListener('DOMContentLoaded', ()=>{
    agregar.addEventListener('click',rediccionarProductos)
})

window.addEventListener('DOMContentLoaded', async()=>{
    sesion.addEventListener('click', cerrarSesion)
})