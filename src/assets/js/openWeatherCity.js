function openWeatherLocation() {
    var loc = "facatativa";
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=cfe6bb4890c8618f3409ccde33ff5aa5&lang=es";//cfe6bb4890c8618f3409ccde33ff5aa5
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=cfe6bb4890c8618f3409ccde33ff5aa5&lang=es";

    //weather

    urlWeather = urlWeather + cityUrl + loc;//url completada

    fetch(urlWeather).then((response) => {
        if(!response.ok) throw {response}
        return response.json();
    }).then((datos) =>{
        const weatherB = datos;
        CardB(weatherB);
    }).catch(error =>{
        console.log(error);
        
    });
    //Forecast

    urlForecast = urlForecast + cityUrl + loc;

    fetch(urlForecast).then((response) =>{
        if(!response.ok) throw {response}
        return response.json();
    }).then((forecastData) =>{
        const forecastB = forecastData;
        CardA(forecastB);

    }).catch(error =>{
        console.log(error);
    });


 //pintar datos

}
function CardA (forecastB){
    console.log(forecastB);

    url = "http://openweathermap.org/img/w/";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    iconUrl3 = url + forecastB.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecastB.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecastB.list[3].weather[0].icon + ".png";

    forecastDate3 = forecastB.list[1].dt_txt.substring(8, 10) + '/' + forecastB.list[1].dt_txt.substring(5, 7) + '/' + forecastB.list[1].dt_txt.substring(0, 4) + ' ' +  forecastB.list[1].dt_txt.substring(11, 13);
    forecastDate6 = forecastB.list[2].dt_txt.substring(8, 10) + '/' + forecastB.list[2].dt_txt.substring(5, 7) + '/' + forecastB.list[2].dt_txt.substring(0, 4) + ' ' +  forecastB.list[2].dt_txt.substring(11, 13);
    forecastDate9 = forecastB.list[3].dt_txt.substring(8, 10) + '/' + forecastB.list[3].dt_txt.substring(5, 7) + '/' + forecastB.list[3].dt_txt.substring(0, 4) + ' ' +  forecastB.list[3].dt_txt.substring(11, 13);

    document.getElementById("date3").textContent = forecastDate3 + "h"
    document.getElementById("iconUrl3").innerHTML = `<img src='${iconUrl3}' alt='icon'></img>`;
    document.getElementById("iconUrl3T").textContent = forecastB.list[1].weather[0].description;
    document.getElementById("temp_a").textContent = (forecastB.list[1].main.temp - 273.15).toFixed(1) + "ºC";
    document.getElementById("date6").textContent = forecastDate6 + "h";
    document.getElementById("iconUrl6").innerHTML = `<img src='${iconUrl6}' alt='icon'></img>`
    document.getElementById("iconUrl6T").textContent = forecastB.list[2].weather[0].description;
    document.getElementById("temp_b").textContent = (forecastB.list[2].main.temp - 273.15).toFixed(1) + "ºC";
    document.getElementById("date9").textContent = forecastDate9 + "h";
    document.getElementById("iconUrl9").innerHTML = `<img src='${iconUrl9}' alt='icon'></img>`
    document.getElementById("iconUrl9T").textContent = forecastB.list[3].weather[0].description;
    document.getElementById("temp_c").textContent = (forecastB.list[3].main.temp - 273.15).toFixed(1) + "ºC";
    


    
}


function CardB (weatherB){
    console.log(weatherB);

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var urla = "https://openweathermap.org/img/w/";
    var iconUrl = urla + weatherB.weather[0].icon + ".png";
    
    document.getElementById("nameCity").textContent = weatherB.name;
    document.getElementById("date").textContent = weatherB.date;
    document.getElementById("tempera").textContent = (weatherB.main.temp - 273.15).toFixed(1) + "ºC";
    document.getElementById("iconP").innerHTML = `<img src='${iconUrl}' alt='icon'></img>`;
    document.getElementById("descr").textContent = weatherB.weather[0].description;
    document.getElementById("tempMax").textContent = "Temperatura máxima: " + (weatherB.main.temp_max - 273.15).toFixed(1) + "ºC";
    document.getElementById("tempMin").textContent = "Temperatura minima: " + (weatherB.main.temp_min - 273.15).toFixed(1) + "ºC";
    document.getElementById("sensTerm").textContent = "sensación térmica: " + (weatherB.main.feels_like - 273.15).toFixed(1) + "ºC";
    document.getElementById("hume").textContent = "Humedad: " + (weatherB.main.feels_like - 273.15).toFixed(1) + "ºC";
    document.getElementById("valVinet").textContent = "Velocidad del viento: " + weatherB.wind.speed + "m/s";
}