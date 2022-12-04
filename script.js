$("#cityForm").submit(function(event){ 
    event.preventDefault();

    let cityName = $("#cityname").val();
    getCurrentWeather(cityName);  
});

/* Add api to call weather by city */
function getCurrentWeather(city){
    $.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=9e7fd0e8531ab4a69ef6d95277c0260e", function(data){
      console.log(data);

        $("#city").html(data.main.name);
        $("#description").html(data.weather[0].description);
        $("#icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
        $("#temp").html("Temperatue: " + data.main.temp + " °F");
        $("#humidity").html("Humidity: " + data.main.humidity + "%");
        $("#windSpeed").html("Wind Speed: " + data.wind.speed + " mph");
    });
    /* Add api to call 5-day forecast */
    $.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid=9e7fd0e8531ab4a69ef6d95277c0260e", function(data){
    console.log(data);

/* Added variables for moment .js, and api to display each day of 5-day forecast date, icon, temp, and humidity */
/* 1 */
  let firstDay = moment().format("M/D/YYYY");
  let firstDayIcon = data.list[0].weather[0].icon;
  let firstDayImage = "https://openweathermap.org/img/wn/" + firstDayIcon + ".png";
  let dayOneImageSrc = $("<img>").attr("src", firstDayImage);
  let firstDayTemp = data.list[0].main.temp + " °F";
  let firstDayTempFar = (firstDayTemp - 273.15) * 1.8 + 32;
  let firstDayTempFixed = firstDayTempFar.toFixed(1); 
  let firstDayHum = data.list[0].main.humidity + "%";

/* DISPLAY and APPEND FIRST DAY DATA */
  let FirstDayDateEl = $("<p>").text(firstDay);
  let FirstDayImageEl = $("<p>").text(firstDayIcon);
  let FirstDayTempEl = $("<p>").text("Temp: " + firstDayTemp);
  let FirstDayHumEl = $("<p>").text("Humidity: " + firstDayHum);

    $(".firstDay").append(FirstDayDateEl);
    $(".firstDay").append(FirstDayImageEl);
    $(".firstDay").append(FirstDayTempEl);
    $(".firstDay").append(FirstDayHumEl);

/* 2 */
  let secondDay = moment().add(1, "days").format("M/D/YYYY");
  let secondDayIcon = data.list[8].weather[0].icon;
  let secondDayImage = "https://openweathermap.org/img/wn/" + secondDayIcon + ".png";
  let secondDayImageSrc = $("<img>").attr("src", secondDayImage);
  let secondDayTemp = data.list[8].main.temp + " °F";
  let secondDayTempFar = (secondDayTemp - 273.15) * 1.8 + 32;
  let secondDayTempFixed = secondDayTempFar.toFixed(1); 
  let secondDayHum = data.list[8].main.humidity + "%";

/* DISPLAY and APPEND SECOND DAY DATA */
  let secondDayDateEl = $("<p>").text(secondDay);
  let secondDayImageEl = $("<p>").text(secondDayIcon);
  let secondDayTempEl = $("<p>").text("Temp: " + secondDayTemp);
  let secondDayHumEl = $("<p>").text("Humidity: " + secondDayHum);

    $(".secondDay").append(secondDayDateEl);
    $(".secondDay").append(secondDayImageEl);
    $(".secondDay").append(secondDayTempEl);
    $(".secondDay").append(secondDayHumEl);

/* 3 */
  let thirdDay = moment().add(2, "days").format("M/D/YYYY");
  let thirdDayIcon = data.list[16].weather[0].icon;
  let thirdDayImage = "https://openweathermap.org/img/wn/" + thirdDayIcon + ".png";
  let thirdDayImageSrc = $("<img>").attr("src", thirdDayImage);
  let thirdDayTemp = data.list[16].main.temp + " °F";
  let thirdDayTempFar = (thirdDayTemp - 273.15) * 1.8 + 32;
  let thirdDayTempFixed = thirdDayTempFar.toFixed(1); 
  let thirdDayHum = data.list[16].main.humidity + "%";

/* DISPLAY and APPEND THIRD DAY DATA */
  let thirdDayDateEl = $("<p>").text(thirdDay);
  let thirdDayImageEl = $("<p>").text(thirdDayIcon);
  let thirdDayTempEl = $("<p>").text("Temp: " + thirdDayTemp);
  let thirdDayHumEl = $("<p>").text("Humidity: " + thirdDayHum);

    $(".thirdDay").append(thirdDayDateEl);
    $(".thirdDay").append(thirdDayImageEl);
    $(".thirdDay").append(thirdDayTempEl);
    $(".thirdDay").append(thirdDayHumEl);

/* 4 */
  let fourthDay = moment().add(3, "days").format("M/D/YYYY");
  let fourthDayIcon = data.list[24].weather[0].icon;
  let fourthDayImage = "https://openweathermap.org/img/wn/" + fourthDayIcon + ".png";
  let fourthDayImageSrc = $("<img>").attr("src", fourthDayImage);
  let fourthDayTemp = data.list[24].main.temp + " °F";
  let fourthDayTempFar = (fourthDayTemp - 273.15) * 1.8 + 32;
  let fourDayTempFixed = fourthDayTempFar.toFixed(1); 
  let fourthDayHum = data.list[24].main.humidity + "%";

/* DISPLAY and APPEND FOURTH DAY DATA */
  let fourthDayDateEl = $("<p>").text(fourthDay);
  let fourthDayImageEl = $("<p>").text(fourthDayIcon);
  let fourthDayTempEl = $("<p>").text("Temp: " + fourthDayTemp);
  let fourthDayHumEl = $("<p>").text("Humidity: " + fourthDayHum);

    $(".fourthDay").append(fourthDayDateEl);
    $(".fourthDay").append(fourthDayImageEl);
    $(".fourthDay").append(fourthDayTempEl);
    $(".fourthDay").append(fourthDayHumEl);

/* 5 */
  let fifthDay = moment().add(4, "days").format("M/D/YYYY");
  let fifthDayIcon = data.list[32].weather[0].icon;
  let fifthDayImage = "https://openweathermap.org/img/wn/" + fifthDayIcon + ".png";
  let fifthDayImageSrc = $("<img>").attr("src", fifthDayImage);
  let fifthDayTemp = data.list[32].main.temp + " °F";
  let fifthDayTempFar = (fifthDayTemp - 273.15) * 1.8 + 32;
  let fifthDayTempFixed = fifthDayTempFar.toFixed(1); 
  let fifthDayHum = data.list[32].main.humidity + "%";

/* DISPLAY and APPEND FIFTH DAY DATA */
  let fifthDayDateEl = $("<p>").text(fifthDay);
  let fifthDayImageEl = $("<p>").text(fifthDayIcon);
  let fifthDayTempEl = $("<p>").text("Temp: " + fifthDayTemp);
  let fifthDayHumEl = $("<p>").text("Humidity: " + fifthDayHum);

    $(".fifthDay").append(fifthDayDateEl);
    $(".fifthDay").append(fifthDayImageEl);
    $(".fifthDay").append(fifthDayTempEl);
    $(".fifthDay").append(fifthDayHumEl);

})
}
/* Added moment.js for current day's date */
  let currentDate = moment().format('M/D/YYYY');
  let mainDate = document.getElementById('currentDay');
  date.innerHTML = currentDate;
