console.log("Alt-o-matic is running!");
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

// Get alt text from API and set in DOM
function set_alt(img){
    console.log("Attempting to fetch...")
    const img_url = img.src
    const encoded = encodeURIComponent(img_url)
    const lang = 'en'
    const fetch_url = "https://altomatic.fly.dev/generate?url=" + encoded + "&lang=" + lang
    fetch(fetch_url)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                return Promise.reject(new Error('Failed to load'));
            }else{
                return response.text()
            }
        }).then(data => {
        console.log('DATA:', data);
        img.alt = data;
    }).catch(error => {
        console.error('Error:', error);
    })
}
img_find();

