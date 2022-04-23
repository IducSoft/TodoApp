import ItemTask from "./ItemTask.js"

const RenderTodo=()=>{

    let render = JSON.parse(window.localStorage.getItem("todoTask"));
    let ListTask = document.getElementById("ListTask");
    ListTask.innerHTML=null;
    render.forEach(element => {   
        ListTask.appendChild(ItemTask(element));
    });
}


export default RenderTodo;