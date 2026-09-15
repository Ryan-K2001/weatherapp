const searchInput = document.getElementById("city-search");

const searchButton = document.getElementById("search-btn");

const cityInfo = document.getElementById("city-info");

const clearButton = document.getElementById("clear-btn");

clearButton.addEventListener("click", function () {
    cityInfo.innerHTML = ``;
    searchInput.value = "";
});

searchButton.addEventListener("click", function () {

    const city = searchInput.value;

    if (city.toLowerCase() === "bangkok") {

        cityInfo.innerHTML = `
            <h1>Bangkok</h1>
            <p>Temperature: 32°C</p>
            <p>Weather: Cloudy</p>
            <p>Humidity: 70%</p>
        `;

    } else if (city.toLowerCase() === "yangon") {
    cityInfo.innerHTML = `
            <h1>Yangon</h1>
            <p>Temperature: 29°C</p>
            <p>Weather: Sunny</p>
            <p>Humidity: 80%</p>
        `;
}

});