$(document).ready(function() {
  //function to get artist id from echonest
  function getArtistID(artist) {
    artist = encodeURI(artist);
    var URL =
      'http://developer.echonest.com/api/v4/artist/similar?api_key=IRHRFVICYNABHJZWU&name=' +
      artist + '&format=json&results=9&start=0';

    $.get(URL, getCallback);
    console.log(URL);
  }

  //callback to insert artist and call for image
  function getCallback(data) {
    //set vars before loop
    var $artistDiv = $('.artist');
    var $imageDiv = '';
    //setup  callback data
    var artistName = '',
      artistImage = '',
      imageJSON = '',
      imageURL = '';
    //loop and add each song title, image & clip
    for (var i = 0; i < 9; i++) {
      //select correct DOM elements
      //$artistDiv = '.artist:eq(' + i + ')';
      $imageDiv = '.mdl-card__title:eq(' + i + ')';
      //select artist ID
      artistName = encodeURI(data.response.artists[i].name);
      imageJSON =
        'http://developer.echonest.com/api/v4/artist/images?api_key=IRHRFVICYNABHJZWU&name=' +
        artistName +
        '&format=json&results=1&start=0&license=cc-by&license=all-rights-reserved';
      //get image for each artist
      updateDivImage(imageJSON, $($imageDiv), artistName);
      $($artistDiv[i]).text(data.response.artists[i].name);
    }
  }
  //function to update images
  function updateDivImage(imageJSON, imageDiv, artist) {
    //reset image first
    imageDiv.css({
      'background-image': 'url("http://placehold.it/400x350?text=Artist+Image+Not+Found")',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    });
    $.get(imageJSON, function(data2) {
      //if there is an image add to DOM
      if (data2.response.images.length >= 1) {
        imageURL = data2.response.images[0].url;
        imageDiv.css({
          'background-image': 'url("' + imageURL + '")',
          'background-repeat': 'no-repeat',
          'background-size': 'cover'
        });

      } else {
        console.log(artist + ': image not found');
        imageDiv.css({
          'background-image': 'url("http://placehold.it/400x350?text=Artist+Image+Not+Found")',
          'background-repeat': 'no-repeat',
          'background-size': 'cover'
        });
      } //end else
    }); //end $.get
  } //end function

  //getting search artist and adding it to URL
  $("#fixed-header-drawer-exp").keypress(function(event) {
    if (event.which == 13) {
      var searchArtist = $('input[name=artist]').val();
      console.log("Handler for .click() called: " + searchArtist);
      event.preventDefault();
      $('input[name=artist]').val('');
      $('div .mdl-textfield').removeClass('is-focused').removeClass(
        'is-dirty');
      getArtistID(searchArtist);
    } //end if
  }); //end keypress
}); //end doc ready
