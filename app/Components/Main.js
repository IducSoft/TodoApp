

const Main=()=>{

    let main = document.createElement("div");

    main.innerHTML =`
            <div class="board step-1">
                
            </div>

            <div id="dashBoard" class="dashBoard pb-3">
            
                <div class="todoList p-1" >
                    <div>
                        <img src="./images/lista-de-verificacion.png" alt="lista" style=" max-width: 4rem; min-width: 2rem;">
                    </div>
                    
                    <h1 style="text-align: center;">Todo List</h1>
                    
                </div>

                <form class="todoList input-text" style="padding: .4rem;">

                    <input type="text" name="text" id="text" style="width: 100%;" class="br-sm p-1" placeholder="Escribe tu tarea" required>
                    <input type="submit" value="Añadir" class="ml-2 btn-purple text-white" id="submit">

                </form>

            <div id="ListTask" class="ListTask">

            </div>

            <div id="panel" class="panel">
                <h2 id="numberItem" class="mb-1">
                    <span id="number">5</span>
                    item left
                </h2>
                <div  class=" display-f" style="justify-content: space-between;">
                    
                    <button class="btn btn-error text-white" id="clearAllTask">
                        Clear All
                    </button>
                </div>
            </div>
            
            <div style="text-align: center;">
                <span>Made with love by ❤️ <a href="https://github.com/IducSoft" target"_blank" style="color:pink; text-decoration: underline;">IducSoft</a></span>
            </div>

        </div>

    `;

    return main;
}

export default Main;