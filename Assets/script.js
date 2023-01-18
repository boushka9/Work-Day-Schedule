$(document).ready(function () {
  //display todays date in empty p tag
  let todaysDate = moment().format('dddd, MMM Do YYYY');
  $("#currentDay").html(todaysDate);
  //curent time will be judged 08-17
  let currentTime = moment().format("HH");

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

    //for each class time-block, judge if the current time is = to <, or > than the current hour 
    $(".time-block").each(function () {
      let hourBlock = $(this).attr("id").split("-")[1];

      //remove/add classes for colorchange based on hour
      if (currentTime == hourBlock) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else if (currentTime > hourBlock) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      }
      else if (currentTime < hourBlock) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("future");
      }
    })


  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


