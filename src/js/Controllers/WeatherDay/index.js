var WeatherDay = Composer.Controller.extend({
    init: function(words) {
        this.words = words;
        this.render();
    },
    render: function() {
        var html = '';
        html += '<div class="weather-day">';
        html += '<h3 class"week-day">' + this.day + '</h3>';
        html += '<h2>' + this.weatherType + '</h2>';
        html += '<div class="TP">';
        html += '<h4>' + this.temp + '° C</h4>';
        html += '<h4>' + this.precip + '%</h4>';
        html += '</div>';
        html += '</div>';
        this.html(html);
    },
    setWeather: function(temp, precip,weatherType,day) {
        this.temp = temp;
        this.precip = precip;
        this.weatherType = weatherType;
        this.day = day;
        this.render();
    }
});

export default WeatherDay;