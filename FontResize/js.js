var size = 16;

function buyult(){
    if (size < 26) {
        size = size + 2;
        document.getElementById("font").style.fontSize = size + "px";
    }
}

function kucult(){
    if (size > 12) {
        size = size - 2;
        document.getElementById("font").style.fontSize = size + "px";
    }
}
