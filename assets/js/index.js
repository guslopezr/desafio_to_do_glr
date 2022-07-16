const tareasNuevas = document.getElementById("tareanueva");
const listadetareas = document.getElementById("tareas");
const total = document.getElementById("total");

const tareasCargadas = [{
    id: 1657477620278,
    tarea: "Revisar la guía semanal   ",
    estado: false,
}, {
    id: 1657477620279,
    tarea: "Hacer los ejercicios de la guía   ",
    estado: false,
}, {
    id: 1657477620280,
    tarea: "Buscar tutoriales   ",
    estado: false,
}, {
    id: 1657477620281,
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

//Eliminación de tareas.

function borrar(id) {
    const index = tareasCargadas.findIndex((ele) => ele.id == id);
    tareasCargadas.splice(index, 1);
    renderTareas();
}

// Estado de las tareas

function renderTareas() {
    let html = "";
    let completadas = tareasCargadas.filter((completa) => completa.estado !== false); // Se filtran tareas completadas
    for (const t of tareasCargadas) {


        if (t.estado == false)
            html += `<li id="${t.id}">${t.id} - ${t.tarea}<span class="close" onclick=borrar(${t.id})><i class="fa-solid fa-trash-can"></i></span></li>`;
        else
            html += `<li id="${t.id}" class="checked" >${t.id} - ${t.tarea}<span class="close" onclick=borrar(${t.id})><i class="fa-solid fa-trash-can"></i></span></li>`;
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
            ev.target.classList.toggle("checked");

            for (let i = 0; i < tareasCargadas.length; i++) {
                if (tareasCargadas[i].id === parseInt(ev.target.id)) {
                    tareasCargadas[i].estado = !tareasCargadas[i].estado;
                }
            }
        }
        renderTareas();
    },
    false
);