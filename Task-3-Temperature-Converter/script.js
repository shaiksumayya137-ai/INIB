function convertTemperature() {
    let temperature = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (temperature === "") {
        result.innerHTML = "Please enter a temperature.";
        return;
    }

    temperature = Number(temperature);

    if (isNaN(temperature)) {
        result.innerHTML = "Please enter a valid number.";
        return;
    }

    if (unit === "celsius") {
        let converted = (temperature * 9 / 5) + 32;
        result.innerHTML = `${temperature}°C = ${converted.toFixed(2)}°F`;
    } 
    else {
        let converted = (temperature - 32) * 5 / 9;
        result.innerHTML = `${temperature}°F = ${converted.toFixed(2)}°C`;
    }
}