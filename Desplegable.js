var desplegables = document.getElementsByClassName("desplegable");
var img_height = "300px";

Array.prototype.forEach.call(desplegables, function(elemento){
    elemento.addEventListener("click", function(){
        if(elemento.nextElementSibling.style.height == img_height){
            elemento.nextElementSibling.style.height = "0px";
          }
          else{
            elemento.nextElementSibling.style.height = img_height;
          }
    });

});


