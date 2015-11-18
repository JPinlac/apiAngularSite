var app = angular.module('myApp', ['ngRoute','ui.bootstrap']);

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

app.controller('searchController', function($scope, getArticles){
    $scope.articleList = getArticles.get("paris");
})

app.factory('getArticles', function($http){
    service={};
    service.articleList=[];

    service.get = function(searchTerm){
        $http.get('https://www.reddit.com/r/aww.json').success(function(response){

            console.log(response);
            return articleList;
        }
    });
    return service;
}