window.onload = PriceServices;

function PriceServices(){
   var service = document.getElementById("services");
   var strService = service.options[service.selectedIndex].text;
    
   if(strService === "mowing"){
     document.getElementById("price").innerHTML = "$40.00"
   }else if(strService === "trimming"){
     document.getElementById("price").innerHTML = "$25.00"
   }else if(strService === "mulch"){
     document.getElementById("price").innerHTML = "$35.00"
   }else if(strService === "leaf"){
     document.getElementById("price").innerHTML = "25.00"
   }
}
