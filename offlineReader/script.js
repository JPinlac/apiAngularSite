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
    $scope.service=getArticles
    $scope.searchArticles = function(searchTerm){
        getArticles.set(searchTerm);
    }
    $scope.articleList = $scope.service.articleList;

    // $scope.geoData = getGeoData.get("paris");
});

app.controller('savedController', function($scope, getArticles, getGeoData){
    $scope.geoData = getGeoData.get("paris");
});

app.factory('getArticles', function($http){
    service={};
    service.articleList=['butts'];
    function article(title,url){
        this.title = title;
        this.url = url;
    }

    service.set = function(searchTerm){
        $http.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?fq='+searchTerm+'&api-key=1aac169c69edc3e8bc34be81972e67e2:10:73496041').success(function(response){

            for(var i = 0; i < 10; i++){
                var newArticle = new article(
                    response.response.docs[i].headline.main,
                    response.response.docs[i].web_url);
                service.articleList[i]=newArticle;
            }
        })
     };
    console.log(service)
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