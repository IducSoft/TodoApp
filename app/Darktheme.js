
export default function darklightTheme(darkclass ="light"){

    // const $ThemeBtn = document.querySelector(btn); 
    const $Selectors = document.querySelectorAll("[data-dark]");
    
    let moon = "dark";
    let sun = "light";


    const lightMode = ()=>{

        $Selectors.forEach((e)=>{

            e.classList.remove(darkclass);
        });

        
        localStorage.setItem("theme", "light");
    }

    const darktMode = ()=>{

        $Selectors.forEach((e)=>{

            e.classList.add(darkclass);
        });

        
        localStorage.setItem("theme", "dark");
    }


    if(darkclass==="light"){

        lightMode();
    }

    if(darkclass==="dark"){

        darkMode();
    }

    

    // document.addEventListener("click", (e)=>{

    //     if(e.target.matches(btn)){

    //         if($ThemeBtn.textContent === moon){

    //             darktMode();
    //         }else{

    //             lightMode();
    //         }
    //     }
    // });

    // document.addEventListener("DOMContentLoaded", (e)=>{

    //     if(localStorage.getItem("theme") === null){

    //         localStorage.setItem("theme", "light");
    //     }

    //     if(localStorage.getItem("theme") === "light"){

    //         lightMode();
    //     }

    //     if(localStorage.getItem("theme") === "dark"){

    //         darktMode();
    //     }
    // });
}


