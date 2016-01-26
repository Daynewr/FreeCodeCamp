'use strict';

var count = 15;

angular.module('newsApp', [])
  .controller('NewsController', function($scope, $http) {
    $http.get('http://www.freecodecamp.com/news/hot')
      .then(function(response) {
        $scope.articles = response.data;
      });
    $scope.count = count;

    $scope.loadMore = function() {
      $scope.count = $scope.count + 15;
      console.log("loadmore clicked");
      console.log("count: " + $scope.count)
    }
  });
