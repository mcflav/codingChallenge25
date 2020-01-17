window.onload = PriceServices;

function PriceServices(){
   var service = document.getElementById("services");
  
   if(service.value === "mowing"){
     document.getElementById("price").innerHTML = "$40.00"
   }else if(service.value === "trimming"){
     document.getElementById("price").innerHTML = "$25.00"
   }else if(service.value === "mulch"){
     document.getElementById("price").innerHTML = "$35.00"
   }else if(service.value === "leaf"){
     document.getElementById("price").innerHTML = "25.00"
   }
}
