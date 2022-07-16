const tareasNuevas = document.getElementById("tareanueva");
const listadetareas = document.getElementById("tareas");
const total = document.getElementById("total");

const tareasCargadas = [{
    id: Date.now(),
    tarea: "Revisar la guía semanal   ",
    estado: false,
}, {
    id: Date.now(),
    tarea: "Hacer los ejercicios de la guía   ",
    estado: false,
}, {
    id: Date.now(),
    tarea: "Buscar tutoriales   ",
    estado: false,
}, {
    id: Date.now(),
    tarea: "Leer libro de Javascript   ",
    estado: false,
}];

// Desplegando las tareas pre cargadas

renderTareas();

// Agregar nuevas tareas

function Agregar() {
    if (tareasNuevas.value === "") {
        alert("Debes agregar al menos una tarea!");
    } else {
        tareasCargadas.push({
            id: Date.now(),
            tarea: tareasNuevas.value,
            estado: false,
        });
        renderTareas();

        tareasNuevas.value = "";
        tareasNuevas.focus();
    }
}

//Eliminación de tareas. Esta función permite borrar las tareas con id.

function borrar(id) {
    const index = tareasCargadas.findIndex((ele) => ele.id == id);
    tareasCargadas.splice(index, 1);
    renderTareas();
}

// Función para mosstrar el estado de las tareas, definiendo variables específicas con LET
function renderTareas() {
    let html = "";
    let completadas = tareasCargadas.filter((completa) => completa.estado !== false); // Se filtran tareas completadas
    for (const t of tareasCargadas) {

        //Se recorre el arreglo de tareas para validar si la tarea stá completada o no y marcarla visualmente;

        if (t.estado == false)
            html += `<li id="${t.id}">${t.id} - ${t.tarea}<span class="close" onclick=borrar(${t.id})><i class="fa-solid fa-trash-can"></i></span></li>`;
        else
            html += `<li id="${t.id}" class="checked" >${t.id} - ${t.tarea}<span class="close" onclick=borrar(${t.id})><i class="fa-solid fa-trash-can"></i></span></li>`; // cuando el estado de la tarea es completado se asigana  la clase "checked" para mostrarla visualmenete marcada en el HTML
    }

    tareas.innerHTML = html;
    total.innerHTML = `Total tareas: ${tareasCargadas.length} Realizadas: ${completadas.length}`; //Contadores
}

// Agregando símbolo "checked" cuando se hace click sobre una tarea. 
var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function(ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked"); //Marcar checked a través de un cambio de clase

            for (let i = 0; i < tareasCargadas.length; i++) {
                //Recorrido del arreglo de tareas
                if (tareasCargadas[i].id === parseInt(ev.target.id)) {
                    //se compara el indice del arreglo con el clickeado
                    tareasCargadas[i].estado = !tareasCargadas[i].estado; //Una vez localizado se cambia el estado según se clickee sobre el elemento
                }
            }
        }
        renderTareas();
    },
    false
);