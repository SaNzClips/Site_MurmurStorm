function getRandomTemperature() {
    var minTemperature = -10;
    var maxTemperature = 15;
    var randomTemperature = Math.floor(Math.random() * (maxTemperature - minTemperature + 1)) + minTemperature;
    document.getElementById("temperature").innerHTML = randomTemperature + "°";
}

function getRandomGauge() {
    var minGauge = 740;
    var maxGauge = 770;
    var randomGauge = Math.floor(Math.random() * (maxGauge - minGauge + 1)) + minGauge;
    document.getElementById("gauge").innerHTML = randomGauge + " мм";
}

function getRandomDroplet() {
    var minDroplet = 0;
    var maxDroplet = 100;
    var randomDroplet = Math.floor(Math.random() * (maxDroplet - minDroplet + 1)) + minDroplet;
    document.getElementById("droplet").innerHTML = randomDroplet + " %";
}
