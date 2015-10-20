$(document).ready(function() {
  var URL = 'http://www.freecodecamp.com/news/hot';

  //get the API information and pass to HTML node builder then add to DOM
  $.get(URL, function(root) {
    var domHolder = '';
    for (var i = 0; i < 10; i++) {
      domHolder += buildDomElement(root[i]);
    }
    domHolder +=
      '<div class="load-more-button"><a href="#" class="mdl-button" id="load-more">(load more)</a></div>';
    $('#overview').append(domHolder);
  }); //first get

  //function to build HTML node
  function buildDomElement(data) {
    domElement =
      '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">';
    domElement +=
      '<header class="mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone back-color mdl-color-text--white" style="background: url(\'' +
      data.image +
      '\'); background-repeat: no-repeat; background-size: cover; background-position: center;">';
    domElement +=
      '<div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone circle-position">';
    domElement +=
      '<div class="section__circle-container__circle mdl-color--primary" style="background: url(\'' +
      data.author.picture +
      '\'); background-repeat: no-repeat; background-size: cover;" >';
    domElement += '</div> </div> </header>';
    domElement +=
      '<div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone" > <div class = "mdl-card__supporting-text">';
    domElement += '<a href = "' +
      data.link +
      '" target="_blank"><h4>' + data.headline +
      '</h4></a> Submitted by: <a class="mdl-button" target="_blank" href="http://www.freecodecamp.com/' +
      data.author.username + '">' + data.author.username + '</a>';
    domElement += '</div> <div class="mdl-card__actions" > <a href = "' +
      data.link +
      '" target="_blank" class="mdl-button">Read Article </a> </div >';
    domElement +=
      '</div><p class="up-votes">Up Votes: ' + data.upVotes.length +
      '</p></section>';

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
        for (var j = 0; j < 10; j++) {
          domHolder += buildDomElement(root[$length]);
          $length++;
        }
        $(domHolder).insertBefore('.load-more-button');

      }); //nested get*/
    }); //click
  }, 1000);


});
