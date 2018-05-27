(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var weather;
var longitude;

var WeatherForcast = Composer.Class.extend({
    initialize: function initialize() {
        var lon = 0;
        if (navigator.geolocation) {
            this.getLongtitude();

            var id = '3361aed947d15eb018f15300a60d41be';
            fetch('http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=' + id).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                weather = myJson;
            });
        }
    },
    getLongtitude: function getLongtitude() {
        navigator.geolocation.getCurrentPosition(function () {
            longitude = 0;
        });

        console.log(longitude);
        return window.longitude;
    }
});

exports.default = WeatherForcast;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var WeatherDay = Composer.Controller.extend({
    init: function init(words) {
        this.words = words;
        this.render();
    },
    render: function render() {
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
    setWeather: function setWeather(temp, precip, weatherType, day) {
        this.temp = temp;
        this.precip = precip;
        this.weatherType = weatherType;
        this.day = day;
        this.render();
    }
});

exports.default = WeatherDay;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ForcastModel = Composer.Model.extend({
    lon: 0,
    lat: 0
});

exports.default = ForcastModel;

},{}],4:[function(require,module,exports){
'use strict';

var _WeatherDay = require('./Controllers/WeatherDay');

var _WeatherDay2 = _interopRequireDefault(_WeatherDay);

var _WeatherForcast = require('./Classes/WeatherForcast');

var _WeatherForcast2 = _interopRequireDefault(_WeatherForcast);

var _ForcastModel = require('./Models/ForcastModel');

var _ForcastModel2 = _interopRequireDefault(_ForcastModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeatherWeek = Composer.Controller.extend({
    init: function init() {
        this.render();
    },
    render: function render() {
        var html = '';
        html += '<div class="week">';
        for (var i = 0; i < 7; i++) {
            html += '<div id="day' + i + '"></div>';
        }
        html += '</div>';
        this.html(html);
        this.addDays();
    },
    addDays: function addDays() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                var id = '3361aed947d15eb018f15300a60d41be';
                var lon = pos.coords.longitude;
                var lat = pos.coords.latitude;

                fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + id).then(function (response) {
                    return response.json();
                }).then(function (weather) {
                    console.log(weather);
                    var d = new Date();
                    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    for (var i = 0; i < 7; i++) {
                        var day = new _WeatherDay2.default({ inject: '#day' + i }, 'hey');
                        var weatherDay = weather.list[i];
                        day.setWeather(Math.round(weatherDay.main.temp - 273.15), weatherDay.main.humidity, weatherDay.weather[0].main, days[d.getDay() + i]);
                    }
                });
            });
        }
    }
});

var weatherWeek = new WeatherWeek({ inject: '#app' });

},{"./Classes/WeatherForcast":1,"./Controllers/WeatherDay":2,"./Models/ForcastModel":3}]},{},[4])

