console.log("Extension loaded!");
function img_find() {
    let all_images = document.getElementsByTagName("img");
    let images_no_alt = [];

    for (let i = 0; i < all_images.length; i++) {
        if(all_images[i].alt === ""){
            images_no_alt.push(all_images[i]);
        }
        else{
            // console.log(all_images[i].alt)
        }

    }
    console.table(images_no_alt);
    for (let i = 0; i < images_no_alt.length; i++) {
        set_alt(images_no_alt[i]);
    }
}

function set_alt(img){
    let fetch_lang = '';
    chrome.storage.sync.get('LANG_SETTING').then((result) => {
        fetch_lang = result.LANG_SETTING;
        console.log(result.LANG_SETTING);
     
    });
    console.log(fetch_lang);
    
    console.log("Attemping to fetch...")
    const img_url = img.src
    const url_protocol = img_url.split(":")[0]
    const url_remaining = img_url.split(":")[1]
    const fetch_url = "https://altomatic.fly.dev/test-params?proto=" + url_protocol + "&fetch_lang=" + fetch_lang
    console.log(fetch_url)
    fetch(fetch_url)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                return Promise.reject(new Error('Failed to load'));
            }else{
                return response.json();
            }
        }).then(data => {
        console.log('DATA:', data);
    }).catch(error => {
        console.error('Error:', error);
    })

}function drop_down(){

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
          let LANG = '';
          switch(selected.outerText){
            case 'English':
            LANG = "EN"
            console.log(LANG)
            break
            
            case 'German':
            LANG = "GR";
            console.log(LANG)
            break
    
            case 'French':
            LANG = "FR"
            console.log(LANG)
            break
    
            case 'Spanish':
            LANG = "ES"
            console.log(LANG)
            break
          }
          chrome.storage.sync.set({ LANG_SETTING: LANG });
        })
        })

      };
img_find();
drop_down();

