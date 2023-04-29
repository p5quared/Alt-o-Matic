console.log("Extension loaded!");
function img_find() {
    let imgs = document.getElementsByTagName("img");
    let imgSrcs = [];

    for (let i = 0; i < imgs.length; i++) {
        if(imgs[i].alt == ""){
        imgSrcs.push(imgs[i]);
        }
        else
            console.log(imgs[i].alt)
        
    }
    console.log(imgSrcs);
    alt_insert(imgSrcs);
}

function alt_insert(imgSrcs){
    for (let i = 0; i < imgSrcs.length; i++) {
        imgSrcs[i].alt = "HOLY SHIT IT WORKED " + (i+1);
    }
}

// Dropdown Menu
function drop_down(){
    let LANG = 'ENG';
      const selected = document.querySelector(".selected");
      const optionsContainer = document.querySelector(".options-container");
      const optionsList = document.querySelectorAll(".option");

      selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
      });

      optionsList.forEach(option => {
        option.addEventListener("click", () => {
          selected.innerHTML = option.querySelector("label").innerHTML;
          optionsContainer.classList.remove("active");
          
          switch(selected.outerText){
            case 'English':
            console.log(LANG)
            break
            
            case 'German':
            LANG = "GER";
            console.log(LANG)
            break
    
            case 'French':
            LANG = "FRA"
            console.log(LANG)
            break
    
            case 'Spanish':
            LANG = "SPA"
            console.log(LANG)
            break
          }
        })
        })
      };      
/*---------------------------------------------------------------------------*/
img_find();
drop_down();