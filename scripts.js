function PriceServices(){
   var service = document.getElementById("services");
   var strService = service.options[service.selectedIndex].text;
    
   if(strService === "Lawn Mowing"){
     document.getElementById("price").innerHTML = "$40.00"
   }else if(strService === "Bush Trimming"){
     document.getElementById("price").innerHTML = "$25.00"
   }else if(strService === "Laying Mulch"){
     document.getElementById("price").innerHTML = "$35.00"
   }else if(strService === "Leaf Removal"){
     document.getElementById("price").innerHTML = "$25.00"
   }else if(strService === "Lawn Treatment - BUGS"){
      document.getElementById("price").innerHTML = "$35.00"
   }else if(strService === "Lawn Treatment - FERTILIZE"){
      document.getElementById("price").innerHTML) = "$45.00"
   }else{
     document.getElementById("price").innerHTML = "$0.00"
   }
}
