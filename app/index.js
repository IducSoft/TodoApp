import App from "./app.js";
import RenderTodo from "./Components/RenderTodo.js";
import darklightTheme from "./Darktheme.js";
import LocalStorage from "./LocalStorage.js";
import ObjectList from "./objectList.js"

document.addEventListener("DOMContentLoaded", (e)=>{

    App();
});


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }

document.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.id==="submit"){
        if(document.getElementById("text").value){  
            let tarea = document.getElementById("text").value;
            document.getElementById("text").value = null;
            let tareaAdd = new ObjectList(tarea);
            let arregloLocal = JSON.parse(window.localStorage.getItem("todoTask"));
            arregloLocal.unshift(tareaAdd);
            window.localStorage.setItem("todoTask", JSON.stringify(arregloLocal));
            swal("Buen trabajo", "Tu tarea está añadida", "success");
            RenderTodo();
        }else{
            swal("Error", "Debe añadir una tarea", "error");
        }
    }


    if(e.target.id==="clearAllTask"){
        window.localStorage.clear();
        location.reload();
    }
    
    if(e.target.id==="check"){

        let storage = JSON.parse(window.localStorage.getItem("todoTask"))
        let check = e.path[2].id
        let ArrayComplete = storage.filter((e)=>{
            if(check == e.RandomNumber){  
                return e;
            }
        })
        ArrayComplete[0].complete=true;
        let ArrayNotComplete = storage.filter((e)=>{
            if(check == e.RandomNumber){
            }else{
                return e;
            }
        })
        let EditArray = [...ArrayComplete, ...ArrayNotComplete]
        window.localStorage.setItem("todoTask", JSON.stringify(EditArray));
        RenderTodo();
    }

    if(e.target.id==="cancel"){
        let storage = JSON.parse(window.localStorage.getItem("todoTask"));
        let check = e.path[2].id;
        let ArrayCancel = storage.filter((e)=>{
            if(check == e.RandomNumber){
            }else{
                return e;
            }
        })
        window.localStorage.setItem("todoTask", JSON.stringify(ArrayCancel));
        RenderTodo();
    }

    
})







// document.addEventListener("click", (e)=>{

//     let arreglo = JSON.parse(window.localStorage.getItem("todoTask"))

//     for (let index = 0; index < 10; index++) {
//         arreglo[index] = "hola";
        
//     }

//     window.localStorage.setItem("todoTask", JSON.stringify(arreglo))

    
//     console.log(arreglo)
    
// })

// document.addEventListener("dblclick", (e)=>{

//     let arreglo = JSON.parse(window.localStorage.getItem("todoTask"))

//     for (let index = 0; index < 10; index++) {
//         arreglo[index] = "modification";
        
//     }

//     window.localStorage.setItem("todoTask", JSON.stringify(arreglo))

    
//     console.log(arreglo)
    
// })


