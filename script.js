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


app.controller('searchController', function($scope, getArticles, getGeoData){
    $scope.articleList = getArticles.get("paris");
    $scope.geoData = getGeoData.get("paris");
});

app.factory('getArticles', function($http){
    service={};
    service.articleList=[];

    service.get = function(searchTerm){
        $http.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?fq='+searchTerm+'&api-key=1aac169c69edc3e8bc34be81972e67e2:10:73496041').success(function(response){

            console.log(response);
            
        })
    };
    return service;
});

app.factory('getGeoData', function($http){
    service2={};

    service2.get = function(searchTerm){
        $http.get("http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?name="+searchTerm+"&api-key=c24f87cd1a530b710c48b2231f630d6c:11:73496093").success(function(response){

            console.log(response);
            
        })
    };
    return service2;
});

// app.factory('viewNy', function(){

// $http.get("http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?name=Paris&api-key=c24f87cd1a530b710c48b2231f630d6c:11:73496093")
//     .success(function(response) {
//         $scope.articleData = response.results;
//     });
// });

// console.log(response.article);

//     var obj ={};
//             obj.setData = function(input1, input2){
//                 this.input1 = input1; 
//                 this.input2 = input2;



