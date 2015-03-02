
 var app = angular.module("MyApp", []);

app.controller("PostsCtrl", function($scope, $http) {
  $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
  console.log('*');
  $http.get('http://127.0.0.1:7000/files/list/').
    success(function(data, status, headers, config) {
        $scope.posts = data;
        console.log(data);
    });
});

