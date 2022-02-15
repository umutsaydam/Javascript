const form=document.getElementById("form");
const userName=document.getElementById("username");

function checkUserName(input) {
    if (input.value=="a") {
        document.write("dENEME");
    }
}

form.addEventListener("submit",function(e){
e.preventDefault();

checkUserName(userName);
});   