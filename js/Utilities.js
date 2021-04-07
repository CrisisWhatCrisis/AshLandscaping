

function swapImage(id) {
    var params = getUrlVars();
    var image = "images/" + params["image"];
    var or = params["O"];
    var imageTag = document.getElementById(id);
    if (imageExists(image)){
        imageTag.src = image;
        if (or == 'P')
        {
            imageTag.style.width = '584px';
            imageTag.style.height = '930px';
        }
    }
    else{
        closeWindow();
    }
}

function getUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function imageExists(image_url){
    var http = new XMLHttpRequest();
    http.open('HEAD', image_url, false);
    http.send();
    return http.status != 404;
}

function closeWindow(){
    window.close();
}

$(function(){
    $("#includedMenu").load("Menus.htm");
})