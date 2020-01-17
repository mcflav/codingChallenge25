window.onload = PriceServices;

function PriceServices(){
   var service = document.getElementById('services');
  
   if(service.value === "mowing"){
     document.getElementsByName("price")[0].innerHTML = "40.00"
   }else if(service.value === "trimming"){
     document.getElementsByName("price")[0].innerHTML = "25.00"
   }else if(service.value === "mulch"){
     document.getElementsByName("price")[0].innerHTML = "35.00"
   }else if(service.value === "leaf"){
     document.getElementsByName("price")[0].innerHTML = "25.00"
   }
}
