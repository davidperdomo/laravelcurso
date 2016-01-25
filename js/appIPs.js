(function(){

var app = angular.module('ipApp', []);
//tiene un procedimiento de injection para poderlo emplear se debe emplear en el arreglo y en las variables

app.controller('mainCtrl', ['$scope','$http', function ($scope,$http) {

//http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK

//jsonp solicita recursos externos
//.get recursos locales

$scope.geo = {};

$http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').success(function(data) {


	$scope.geo = data;

})


	}])

})();