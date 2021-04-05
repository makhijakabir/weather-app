const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=fc320a40a05ecf6492bbb420f541f316"
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = Math.ceil(weatherData.main.temp - 273);
            const weatherDes = weatherData.weather[0].description;
            const weatherIcon = weatherData.weather[0].icon;
            const imageURL = "";
            res.write("<h1>The temperature in London is " + temp + " Degree Celcius! </h1>");
            res.write("<h2>The weather in London is " + weatherDes + "</h2>");
            res.send();
        });
    });
});

app.listen(3000, function() {
    console.log("HEY! I am the server speaking!");
});