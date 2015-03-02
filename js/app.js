(function () {
	
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

	app.controller('TabsController', function () {
	this.tab = 1;
		this.selectTab = function (tab) {
		this.tab = tab;
		};
	});

	app.controller('CommentsController', function () {
		this.comments = [];
		this.comment = {};
		this.show = false;
		this.toggle = function () {
		this.show = !this.show;
		};
		this.anonymousChanged = function () {
		if (this.comment.anonymous) {
			this.comment.email = "";
			}
		};
		this.addComment = function () {
			this.comment.date = Date.now();
			this.comments.push(this.comment);
			this.comment = {};
		};
	});
})();