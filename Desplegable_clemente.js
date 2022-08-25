    var desplegable3 = document.getElementById("desplegable_clemente");
    var img_height = "672px";
    var imagen_desplegada3 = document.getElementById("clemente");

    desplegable3.addEventListener("click", function() {
      if(imagen_desplegada3.style.height == img_height){
        imagen_desplegada3.style.height = "0px";
      }
      else{
        imagen_desplegada3.style.height = img_height;
      }
    });
 