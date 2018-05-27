var weather;
var longitude;

var WeatherForcast = Composer.Class.extend({
    initialize: function() {
        var lon = 0;
        if(navigator.geolocation){
            this.getLongtitude();
            
            var id = '3361aed947d15eb018f15300a60d41be';
            fetch('http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid='+id)
                .then(function(response){
                    return response.json();
                })
                .then(function(myJson){
                    weather = myJson;   
                });
        }
    },
    getLongtitude: function() {
        navigator.geolocation.getCurrentPosition(function() {
            longitude = 0;
        });
        
        console.log(longitude);
        return window.longitude;
        
    }
});

export default WeatherForcast;