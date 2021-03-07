var currentDay = moment().format("dddd, MMMM Do YYYY"); 
$("#currentDay").text(currentDay);

//retrieving the text for tasks in time-blocks from localStorage
$(document).ready(function(){
  $(".textarea").each(function(){
      var id = $(this).attr("id");
      var value = localStorage.getItem(id);
      $(this).val(value);
  });
});

//run the save function once button clicked
$(".saveBtn").on("click", function() {
  var value = $(this).siblings(".textarea").val();
  var key = $(this).siblings(".textarea").attr("id");
  localStorage.setItem(key, value);
}); 

//clears the local storage and reset value
$(".clearBtn").on("click", function(){
  $(".textarea").val("");
  localStorage.clear();
});


var currentHour = moment().format("HH"); 

//changes color of timeblocks depending on time 
function colorTime() {

    $(".time-block").each(function(index,item){
      var hourInt = parseInt(currentHour); 
      var blockTime = parseInt($(item).attr("data-hour"));
      if(blockTime === hourInt){
        $(this).children("textarea").addClass("present");
      } else if (blockTime < hourInt) {
        $(this).children("textarea").addClass("past");
      } else {
        $(this).children("textarea").addClass("future");
      }
    });
};

colorTime(); 

//updates page every 15s
var runAgain = window.setInterval(function() {
    colorTime();
}, 15000); 


