var qtPlus = document.querySelectorAll(".svg-icon3");
var qtMoins = document.querySelectorAll(".svg-icon4");
var qt = document.querySelectorAll(".qt");
var prix= document.querySelectorAll(".prix");
console.log(qtPlus);
console.log(qtMoins);
console.log(qt);
for(let i=0; i<qtPlus.length;i++){
    qtPlus[i].addEventListener("click", function(){ 
        let q = parseInt(qt[i].innerHTML); 
        qt[i].innerHTML=q+1;

     })
}

for(let i=0; i<qtMoins.length;i++){
    qtMoins[i].addEventListener("click", function(){ 
        let q = parseInt(qt[i].innerHTML); 
        if(q >0){
            qt[i].innerHTML=q-1;
        }
        
     })
}
