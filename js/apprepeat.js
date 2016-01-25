(function(){

var app = angular.module('universidadApp', []);
app.controller('listadoCtrl', ['$scope', function ($scope) {

	$scope.listado = ["David Perdomo", "Gregorio Perdomo", "Arnet Godoy", "Natalia Rios"];
	
	$scope.listadoProfesores = {
		profesores:[
		{
			Nombre: "David Perdomo",
			edad: 35,
			Clase: "Metodos"

		},
		{
			Nombre: "Andres Castrillon",
			edad: 25,
			Clase: "Quimica"

		},
		{
			Nombre: "Adan Smit",
			edad: 42,
			Clase: "Teoria"

		},
		{
			Nombre: "Natalia Rios",
			edad: 36,
			Clase: "Cocina Avanzada"

		},

		]

	}	
}]);

})();