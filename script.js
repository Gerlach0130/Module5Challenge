// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var today = dayjs();
  var currentTime = dayjs().format('H');

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('#hour-9').children('.saveBtn').on('click', function(){
    var textInput = document.getElementById("hour9text");
    localStorage.setItem("hour9", textInput.value);
  });
  $('#hour-10').children('.saveBtn').on('click', function(){
    var textInput = document.getElementById("hour10text");
    localStorage.setItem("hour10", textInput.value);
  });
  $('#hour-11').children('.saveBtn').on('click', function(){
    var textInput = document.getElementById("hour11text");
    localStorage.setItem("hour11", textInput.value);
  });
  $('#hour-12').children('.saveBtn').on('click', function(){
    var textInput = document.getElementById("hour12text");
    localStorage.setItem("hour12", textInput.value);
  });
  $('#hour-13').children('.saveBtn').on('click', function(){
    var textInput = document.getElementById("hour13text");
    localStorage.setItem("hour13", textInput.value);
  });
  $('#hour-14').children('.saveBtn').on('click', function(){
    var textInput = document.getElementById("hour14text");
    localStorage.setItem("hour14", textInput.value);
  });
  $('#hour-15').children('.saveBtn').on('click', function(){
    var textInput = document.getElementById("hour15text");
    localStorage.setItem("hour15", textInput.value);
  });
  $('#hour-16').children('.saveBtn').on('click', function(){
    var textInput = document.getElementById("hour16text");
    localStorage.setItem("hour16", textInput.value);
  });
  $('#hour-17').children('.saveBtn').on('click', function(){
    var textInput = document.getElementById("hour17text");
    localStorage.setItem("hour17", textInput.value);
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  $('.time-block').each(function () {
    var parseHour = parseInt($(this).attr('id').split('-')[1]);

    if (parseHour < currentTime) {
      $(this).addClass('past');
    }
    else if (parseHour === currentTime) {
      $(this).addClass('present');
    }
    else {
      $(this).addClass('future');
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));
});

loadStorage();

function loadStorage() {
  var hour9 = localStorage.getItem("hour9");
  var text9 = document.getElementById('hour9text');
  var hour10 = localStorage.getItem("hour10");
  var text10 = document.getElementById('hour10text');
  var hour11 = localStorage.getItem("hour11");
  var text11 = document.getElementById('hour11text');
  var hour12 = localStorage.getItem("hour12");
  var text12 = document.getElementById('hour12text');
  var hour13 = localStorage.getItem("hour13");
  var text13 = document.getElementById('hour13text');
  var hour14 = localStorage.getItem("hour14");
  var text14 = document.getElementById('hour14text');
  var hour15 = localStorage.getItem("hour15");
  var text15 = document.getElementById('hour15text');
  var hour16 = localStorage.getItem("hour16");
  var text16 = document.getElementById('hour16text');
  var hour17 = localStorage.getItem("hour17");
  var text17 = document.getElementById('hour17text');
  text9.textContent = hour9;
  text10.textContent = hour10;
  text11.textContent = hour11;
  text12.textContent = hour12;
  text13.textContent = hour13;
  text14.textContent = hour14;
  text15.textContent = hour15;
  text16.textContent = hour16;
  text17.textContent = hour17;
};

