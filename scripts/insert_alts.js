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
    console.log("Attemping to fetch...")
    const img_url = img.src
    const url_protocol = img_url.split(":")[0]
    const url_remaining = img_url.split(":")[1]
    const fetch_url = "https://altomatic.fly.dev/test-params?proto=" + url_protocol + "&dest=" + url_remaining
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
}
img_find();

