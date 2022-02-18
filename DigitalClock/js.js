let days = document.getElementById("days"),
    hours = document.getElementById("hours"),
    minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds");

const nameOfDay = {
    0: "Pa",
    1: "Pt",
    2: "Sa",
    3: "Ça",
    4: "Pe",
    5: "Cu",
    6: "Cum",
};

function setTheTime() {
    const date = new Date();
    
    days.innerHTML = nameOfDay[date.getDay()];
    hours.innerHTML = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    minutes.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    seconds.innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
}

setInterval(setTheTime, 1000);