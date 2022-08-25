    var desplegable1 = document.getElementById("desplegable_val");
    var img_height = "375px";
    var imagen_desplegada1 = document.getElementById("val");

    desplegable1.addEventListener("click", function() {
      if(imagen_desplegada1.style.height == img_height){
        imagen_desplegada1.style.height = "0px";
      }
      else{
        imagen_desplegada1.style.height = img_height;
      }
    });
 
