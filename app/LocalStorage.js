import RenderTodo from "./Components/RenderTodo.js";




const LocalStorage = ()=>{
    let todo = new Array();
    if(window.localStorage.getItem("todoTask")){
        console.log(JSON.parse(window.localStorage.getItem("todoTask")));
        RenderTodo();
    }else{
        window.localStorage.setItem("todoTask", JSON.stringify(todo));
    }

    
}



export default LocalStorage;