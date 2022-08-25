    var desplegable2 = document.getElementById("desplegable_esei");
    var img_height = "540px";
    var imagen_desplegada2 = document.getElementById("esei");

    desplegable2.addEventListener("click", function() {
      if(imagen_desplegada2.style.height == img_height){
        imagen_desplegada2.style.height = "0px";
      }
      else{
        imagen_desplegada2.style.height = img_height;
      }
    });
 