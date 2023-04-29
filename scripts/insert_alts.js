console.log("Extension loaded!");
function img_find() {
    let all_images = document.getElementsByTagName("img");
    let images_no_alt = [];

    for (let i = 0; i < all_images.length; i++) {
        if(all_images[i].alt === ""){
            images_no_alt.push(all_images[i]);
        }
        else
            console.log(all_images[i].alt)
        
    }
    console.table(images_no_alt);
    for (let i = 0; i < images_no_alt.length; i++) {
        insert_alt(images_no_alt[i]);
    }
}

function insert_alt(img){
    for (let i = 0; i < img.length; i++) {
        img[i].alt = "HOLY SHIT IT WORKED " + (i+1);
    }
}
img_find();

