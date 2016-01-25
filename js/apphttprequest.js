(function(){

var app = angular.module('httpApp', []);
//tiene un procedimiento de injection para poderlo emplear se debe emplear en el arreglo y en las variables

app.controller('mainCtrl', ['$scope','$http', function ($scope,$http) {

	
$scope.profesores = {};
$scope.tblProfesores = 'parciales/tblProfesores.html';


$http.get('json/profesores.json').success(function(data){
//codigo cuando encuentra la peticion

$scope.profesores = data.profesores;


})


	}])

})();