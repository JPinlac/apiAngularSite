var app = angular.module('awwApp', ['ngRoute','ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'view1.html',
            controller: 'searchController'
        })
        .when('/saved', {
            templateUrl: 'view2.html',
            controller: 'savedController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.factory('viewNy', function(){

$http.get("http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?name=Paris&api-key=c24f87cd1a530b710c48b2231f630d6c:11:73496093")
    .success(function(response) {
        $scope.articleData = response.results;
    });
});

console.log(response.article);

    var obj ={};
            obj.setData = function(input1, input2){
                this.input1 = input1; 
                this.input2 = input2;


