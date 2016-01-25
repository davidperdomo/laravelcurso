var app = angular.module('imagegroup', []);

app.controller('profesorCtrl',  function ($scope) {

	//this.profesor = profesorData;
	$scope.profesor = profesorData;
	$scope.editando = {};
	$scope.mostrarCaja = false;
	
	//Esta funcion copiara 
	$scope.editarProfesor = function(){
		angular.copy( $scope.profesor, $scope.editando);
		$scope.mostrarCaja = true;
	}

	$scope.guardarCambios = function(){
		angular.copy( $scope.editando, $scope.profesor);
		$scope.mostrarCaja = false;
	}
	$scope.cancelarCambios = function(){
		$scope.editando = {};
		$scope.mostrarCaja = false;
	}

});


var profesorData = {
	nombre: "David Camilo Perdomo",
	bio: "Desarrollador web en proceso, voy a aprender Laravel, ser muy bueno en php y javascrip. Angular sera mi plataforma de salida",
	edad: 35,
	foto: "dcp.jpg"
}

