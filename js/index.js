
let age = 18; 

console.log(age); 

let firstName = "Christopher Valencia"; 

console.log("My name is " + firstName ); 


document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username); 
    document.getElementById("myLabel").innerHTML = "Hello " + username + "!"; 
}

$("#eventButton").click(function () {
    $("#eventMessage").text("Button clicked!");
});