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
        //save time/text to local storage (time=key so input=value)
        localStorage.setItem(inputTime, userInput);
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

    //get saved text value  from local storage and save to coresponding time slot (time "HH" = key)
    $("#hour-09 .description").val(localStorage.getItem("09")); 
    $("#hour-10 .description").val(localStorage.getItem("10")); 
    $("#hour-11 .description").val(localStorage.getItem("11")); 
    $("#hour-12 .description").val(localStorage.getItem("12")); 
    $("#hour-13 .description").val(localStorage.getItem("13")); 
    $("#hour-14 .description").val(localStorage.getItem("14")); 
    $("#hour-15 .description").val(localStorage.getItem("15")); 
    $("#hour-16 .description").val(localStorage.getItem("16")); 
    $("#hour-17 .description").val(localStorage.getItem("17")); 
  
 
});


