var app = angular.module('ngRouteApp', ['ngRoute']);
//tiene un procedimiento de injection para poderlo emplear se debe emplear en el arreglo y en las variables

app.controller('mainCtrl', ['$scope','$http', function ($scope,$http) {

$scope.menuSuperior = 'parciales/menu.html';

$scope.setActive = function (Opcion) {
	
$scope.mInicio	="";
$scope.mProfesores	="";
$scope.mAlumnos	="";
$scope.mListado	="";

$scope[Opcion] = "active";
}




	}]);

