import LocalStorage from "./LocalStorage.js";
import Main from "./Components/Main.js";



function App(){

    const $root = document.getElementById("root");
    $root.innerHTML = null;
    
    $root.appendChild(Main());


    LocalStorage();
}


export default App;