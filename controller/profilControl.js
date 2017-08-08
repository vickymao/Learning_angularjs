'use strict'
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("profil.html").then(function(response) {
        $scope.name = response.data.name;
    });
});