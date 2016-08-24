$(document).ready(function() {
  var URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=rating&q=javascript&relevanceLanguage=en&key=';

  //get the API information and pass to HTML node builder then add to DOM
  $.get(URL, function(root) {
    var domHolder = '';
    var dateHolder = '';
    for (var i = 0; i < 10; i++) {
      dateHolder = new Date(root.items[i].snippet.publishedAt);
      dateHolder = dateHolder.toDateString();
      console.log(dateHolder);
      domHolder += buildDomElement(root.items[i], dateHolder);
    }
    domHolder +=
      '<div class="load-more-button"><a href="#" class="mdl-button" id="load-more">(load more)</a></div>';
    $('#overview').append(domHolder);
  }); //first get

  //function to build HTML node
  function buildDomElement(data, dateHolder) {
    domElement =
      '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">';
    domElement +=
      '<header class="mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone back-color mdl-color-text--white" style="background: url(\'' +
      data.snippet.thumbnails.medium.url +
      '\'); background-repeat: no-repeat; background-size: cover; background-position: center;">';
    domElement +=
      '<div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone circle-position">';
    domElement +=
      '<div class="section__circle-container__circle mdl-color--primary" style="background: url(\'' +
      data.snippet.thumbnails.medium.url + '\'); background-repeat: no-repeat; background-size: cover;" >';
    domElement += '</div> </div> </header>';
    domElement +=
      '<div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone" > <div class = "mdl-card__supporting-text">';
    domElement += '<a href = "http://www.youtube.com/watch?v=' +
      data.id.videoId +
      '" target="_blank"><h4>' + data.snippet.title +
      '</h4></a> Submitted by: <a class="mdl-button" target="_blank" href="http://www.youtube.com/' +
      data.snippet.channelTitle + '">' + data.snippet.channelTitle+ '</a>';
    domElement +='<div>'+ data.snippet.description +'</div>';
    domElement += '</div> <div class="mdl-card__actions" > <a href = "http://www.youtube.com/watch?v=' +
      data.id.videoId +
      '" target="_blank" class="mdl-button">Watch Video </a> </div >';
    domElement +=
      '</div><p class="up-votes">Published: '+ dateHolder +'</p></section>';

    return domElement;
  }

  //load more articles on click
  window.setTimeout(function() {
    $('#load-more').click(function(event) {
      event.preventDefault();
      domHolder = '';
      $.get(URL, function(root) {
        var $length = $('.section--center').length;
        console.log($length);
        if($length < 50){
        for (var j = 0; j < 10; j++) {
          domHolder += buildDomElement(root.items[$length]);
          $length++;
        }
        $(domHolder).insertBefore('.load-more-button');
      } else {
        $('#load-more').html('(End of Results)');
      }

      }); //nested get*/
    }); //click
  }, 1000);


});
