'use strict';

//define vars for file
var search = 'Wikipedia';
var apiCallSearch = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=';
var apiCallImage ='https://en.wikipedia.org/w/api.php?action=query&titles=';
var apiCallSearchEnd = '&callback=JSON_CALLBACK';
var apiCallImageEnd = '&prop=pageimages&format=json&pithumbsize=500&callback=JSON_CALLBACK';
var pageId = 0;
var imageStatic = 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png';
var imageLink = '';
var imageArray = [];


angular
  .module('wikiSearch', [
  'WikiSearchController',
  'ngSanitize'
  ])
