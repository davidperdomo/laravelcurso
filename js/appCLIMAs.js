(function(){

var app = angular.module('ipApp', []);
//tiene un procedimiento de injection para poderlo emplear se debe emplear en el arreglo y en las variables

app.controller('mainCtrl', ['$scope','$http', function ($scope,$http) {

//http://api.openweathermap.org/data/2.5/weather?lat=6.33732&lon=-75.557953&appid=d3625e08dc5721a6eccf340976f11ac6&callback=JSON_CALLBACK

//jsonp solicita recursos externos
//.get recursos locales

//http://json.parser.online.fr/ para entender mejor los JSON complejos
$scope.geo = {};

$http.jsonp('http://api.openweathermap.org/data/2.5/weather?lat=6.33732&lon=-75.557953&appid=d3625e08dc5721a6eccf340976f11ac6&callback=JSON_CALLBACK').success(function(data) {


	$scope.clima = data;

})

$scope.kelvinCelcios = function(k){

c = k - 273.15;
c = Math.round( c*100) / 100;

return c;
}


	}])

})();