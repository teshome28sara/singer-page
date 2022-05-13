let button1 = document.querySelector("#button1"); 
let button2 = document.querySelector("#button2");  
let button4 = document.querySelector("#button4");


button1.addEventListener("click" , () => {
    document.getElementById("box").style.width = '300px';
    document.getElementById("box").style.height = '300px';

})

 
button2.addEventListener("click" , () => {
    document.getElementById("box").style.backgroundColor = "blue";
}) 

function fadeOut(){
    document.getElementById("box").style.opacity = 0.2;
}
button4.addEventListener("click" , () => {
    document.getElementById("box").style.width = '150px'; 
    document.getElementById("box").style.height = '150px'; 
    document.getElementById("box").style.backgroundColor = "orange";
})

function fadeIn(){
    document.getElementById("box").style.opacity = 1;
} 

