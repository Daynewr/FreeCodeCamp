angular
  .module('WikiSearchController',['ngSanitize'])
  .controller('WikiSearchController', ['$scope', '$http', function($scope,
    $http) {
      $scope.go = function(){
        fetchSearch($scope, $http);
        $scope.search = null;
      }
      fetchSearch($scope, $http);
  }]);

function fetchSearch($scope, $http) {
  $http.jsonp(apiCallSearch + search + apiCallSearchEnd)
    .then(function(response) {
      $scope.wikis = response.data;

    $scope.wikis.query.search.forEach(function(wiki, index){
      $http.jsonp(apiCallImage+wiki.title+apiCallImageEnd)
        .then(function(response){
           pageId = Object.keys(response.data.query.pages);
           imageLink = response.data.query.pages[pageId].thumbnail ?  response.data.query.pages[pageId].thumbnail.source : imageStatic;
           wiki.image = imageLink;
           console.log(search);
        });
    });
  });
}

//jquery to get value.
$(document).ready(function() {
  $(document).keypress(function(e) {
    if (e.which == 13) {
      search = $('#wikisearch').val();
      console.log(search);
    }
  });
});
