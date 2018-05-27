
import WeatherDay from './Controllers/WeatherDay';
import WeatherForcast from './Classes/WeatherForcast';
import ForcastModel from './Models/ForcastModel';

var WeatherWeek = Composer.Controller.extend({
    init: function() {
        this.render();
    },
    render: function() {
        var html = '';
        html += '<div class="week">';
        for(var i = 0; i < 7; i ++){
             html += '<div id="day'+i+'"></div>'
        }
        html += '</div>';
        this.html(html);
        this.addDays();
    },
    addDays: function() {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(pos) {
                var id = '3361aed947d15eb018f15300a60d41be';
                var lon = pos.coords.longitude;
                var lat = pos.coords.latitude;
                    
                fetch('http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid='+id)
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(weather){
                        console.log(weather);
                        var d = new Date();
                        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                        for(var i = 0; i < 7; i++){
                            var day = new WeatherDay({inject: '#day'+i}, 'hey');
                            var weatherDay = weather.list[i];
                            day.setWeather(Math.round(weatherDay.main.temp-273.15),weatherDay.main.humidity,
                            weatherDay.weather[0].main, days[d.getDay()+i]); 
                        }  
                    });   
                
            });
        }
    }
});

var weatherWeek = new WeatherWeek({inject:'#app'});



