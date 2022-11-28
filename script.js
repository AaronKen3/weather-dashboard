// GLOBAL varibalies

document.querySelector('#searchBtn')
.addEventListener('click', function() {
    let input = document.querySelector('#input').value
    searchWeather(input)
})
function searchWeather(city) {
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e7fd0e8531ab4a69ef6d95277c0260e`)
    .then (res=>res.json()) 
    .then (data=>{
        console.log(data)
    })
}