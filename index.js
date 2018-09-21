const body = document.getElementById("#gradient-background")
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 =  document.querySelector(".color2");

color1.addEventListener("input", function(){
    body.style.backgroundColor = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value + ");";    
});

color2.addEventListener("input", function(){
    console.log(color2.value);
});