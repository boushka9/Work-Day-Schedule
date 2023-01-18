$(document).ready(function () {
  //display todays date in empty p tag
  let todaysDate = moment().format('dddd, MMM Do YYYY');
  $("#currentDay").html(todaysDate);
  //curent time will be judged 08-17
  let currentTime = moment().format("HH");

  
    $(document).ready(function (){
      //listen for click on saveBtn
      $(".saveBtn").on("click", function (){
        //userInput = the text that the user inputed into the textarea (which is sibling to savebtn)
        let userInput = $(this).siblings(".description").val();
        //time attr = parent of savebtn and hour id = split by -
        let inputTime = $(this).parent().attr("id").split("-")[1];
        //save text/time to local storage
        localStorage.setItem(userInput, inputTime);
      })
    })

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


