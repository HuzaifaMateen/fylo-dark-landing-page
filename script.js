let input = document.getElementById("inputBox");
let error = document.getElementById("error");
let btn = document.getElementById("burtn");

btn.addEventListener("click", function(){
    if(input.value === ""){
        input.style.border = "1px solid hsl(4, 100%, 67%)";
        error.textContent = "Input field is empty";
    }
    else if(input.value.indexOf("@") === -1 || input.value.indexOf(".com") === -1){
        input.style.border = "1px solid hsl(4, 100%, 67%)";
        error.textContent = "Valid Email required";
    }
    else{
    input.style.border = "1px solid hsl(0, 0%, 100%)";
    error.textContent = "";
    }
});