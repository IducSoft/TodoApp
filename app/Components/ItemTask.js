

const ItemTask =(element)=>{

    let itemTask = document.createElement("div");
    itemTask.id=element.RandomNumber;

    if(element.complete === false){

        itemTask.classList.add("itemTask",  "p-1", "mb-1", "itemTask-bg-gray");
        itemTask.style.justifyContent = "space-between";
        itemTask.innerHTML = `
                <div class="display-f" style="width: 100%; justify-content: space-between;">
                    <img id="check" src="./images/cheque.png" alt="check" style=" max-width: 2rem; min-width: 1rem; cursor: pointer;" class="mr-1">
                
                    <img id="cancel" src="./images/cancelar.png" alt="cancelar" style=" max-width: 2rem; min-width: 1rem; cursor: pointer;" class="mr-1">
                </div>

            
            <h2 class="text-task">${element.todo}</h2>
        
        `;
    }else{


        itemTask.classList.add("itemTask",  "p-1", "mb-1", "itemTask-bg-green");
        itemTask.style.justifyContent = "space-between";
        itemTask.innerHTML = `
                <div class="display-f" style="width: 100%; justify-content: space-between;">
                    <img id="check" src="./images/cheque.png" alt="check" style=" max-width: 2rem; min-width: 1rem; cursor: pointer;" class="mr-1">
                
                    <img id="cancel" src="./images/cancelar.png" alt="cancelar" style=" max-width: 2rem; min-width: 1rem; cursor: pointer;" class="mr-1">
                </div>

            
            <h2 class="text-task">${element.todo}</h2>
        
        `;

    }
    

    return itemTask;
}


export default ItemTask;