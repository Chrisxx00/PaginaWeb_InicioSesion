import{AdminUser, loginout} from "../Controllers/Firebase.js"


const sesion = document.getElementById('btn-cerrar')
const agregar = document.getElementById('btn-agregar')
const ver =  document.getElementById('vdata')
const eliminar = document.getElementById('btn-eliminar')

async function cargar(){
    ver.innerHTML=''
    const docref = AdminUser()
    const querySnapshot = await docref
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id}`);
        ver.innerHTML+=`
            <tr>
            <td>${doc.id}</td>
            <th scope="row">${doc.data().Id}</th>
            <td>${doc.data().name}</td>
            <td>${doc.data().Fecha}</td>
            <td>${doc.data().direccion}</td>
            <td>${doc.data().telefono}</td>
            <td>${doc.data().email}</td>
            <td>${doc.data().password}</td>
            <td><button class="btn btn-danger" id="btn-eliminar" onclick="eliminarUsuario('${doc.Id}')">Eliminar</button></td>
            </tr>
        `
    });
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

export function redireccionarRegistro() {
    window.location.href = "Register.html";
}


export const deleteuser = (id) => {
    deleteuser(id)
        .then(() => {
            console.log("Usuario eliminado correctamente");
            cargar(); // Volver a cargar los datos después de eliminar el usuario
        })
        .catch((error) => {
            console.error("Error al eliminar usuario: ", error);
        });
}

  

// Asignar la función eliminarUsuario al objeto window
window.deleteuser = deleteuser;

window.addEventListener('DOMContentLoaded', ()=>{
    agregar.addEventListener('click',redireccionarRegistro)
})

window.addEventListener('DOMContentLoaded', async()=>{
    sesion.addEventListener('click', cerrarSesion)
})

window.addEventListener('DOMContentLoaded', async()=>{
    cargar()
})