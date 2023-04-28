console.log("Extension loaded!");
function img_find() {
    var imgs = document.getElementsByTagName("img");
    var imgSrcs = [];

    for (var i = 0; i < imgs.length; i++) {
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
    for (var i = 0; i < imgSrcs.length; i++) {
        imgSrcs[i].alt = "HOLY SHIT IT WORKED " + (i+1);
    }
}
img_find();

