//run jQuery on document ready
$(document).ready(function() {
  //empty array to hold inputs
  var calculate = [];
  //empty string to concat number input
  var numString = '';
  //variable for toggle delay
  var toggleTime;
  var answer;

  //toggle clear switch back to off on single click
  $('.mdl-switch').click(function() {
    setTimeout(function() {
      $('label').addClass('is-checked');
    }, 500);

    setTimeout(function() {
      $('label').removeClass('is-checked');
      console.log('settime out running');
    }, 800);

    //reset everything on clear toggle
    $('.mdl-card__title').empty();
    calculate.length = 0;
    numString = '';
  });

  //add content to main screen when button pressed & calculate total
  $('button').click(function() {
    //clone button number in var
    var $element = $(this).contents().clone();
    var $value = $(this).val();
    console.log($value);

    //empty the screen if number is pressed after equal
    if (!!answer && !isNaN($value)) {
      $('.mdl-card__title').empty();
      answer = '';
      calculate.length = 0;
      console.log('screen cleared');
    }
    //empty default screen text
    $('h2').empty();
    $('.mdl-card__title').removeClass('flipped').append($element);

    //check if button is a number
    if (!isNaN($value) || $value === '.') {
      //if number or . add to numString
      numString = numString + $value;
      console.log('number string: ', numString);
    } //check if button is operator
    else if ($value != '=') {
      //if operator push numString to calculate
      answer = '';
      calculate.push(numString);
      numString = '';
      //push operator to calculate
      calculate.push($value);
      console.log('array: ', calculate);
    }
    //check if equal button is pushed
    else if ($value === '=') {
      calculate.push(numString);
      console.log('array: ', calculate);
      //if calculate[2] is true
      if (calculate[2]) {
        //perform calculations. Create string and eval
        answer = calculate.join('');
        answer = eval(answer);
        answer = answer.toString().substring(0, 10);
        console.log('answer: ', answer);
        //empty DOM output
        $('.mdl-card__title').empty();
        //add operate total to DOM
        $('.mdl-card__title').append(answer);
        //empty calculate
        calculate = [answer];
        //empty numString
        numString = ' ';
      }
    } else {
      $('.mdl-card__title').empty();
      $('.mdl-card__title').append('ERROR');
    }
  });
});
