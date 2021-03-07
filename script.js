//var currentHr = document.getElementsByClassName("time-block"); 

var saveBtn = $('saveBtn'); 


var currentDay = moment().format("dddd, MMMM Do YYYY"); 
$("#currentDay").text(currentDay);

var currentHour = moment().format("HH");

//retrieving the text for tasks in time-blocks from localStorage
$(document).ready(function(){
  $('.textarea').each(function(){    
      var id = $(this).attr('id');
      var value = localStorage.getItem(id);
      $(this).val(value);
  }); 
});

//saving text for tasks to localStorage
$('.savebtn').on('click', function(){
  $('.textarea').each(function(){    
      var id = $(this).attr('id');
      var value = $(this).val();
      localStorage.setItem(id, value);
  });   
});

$('.clearBtn').on('click', function(){
  $('.textarea').each(function(){
      $('.textarea').val('');    
      var id = $(this).attr('id');
      var value = $(this).val();
      localStorage.setItem(id, value);
  });   
});

function colorTime() {
  var timeBlockElements = $(".textarea");

  //loop through textbox classes
  for (var i = 0 ; i < timeBlockElements.length ; i++) {

      //Get element i's ID as a string
      var elementID = timeBlockElements[i].id;

      //get element by ID
      var manipID = document.getElementById(timeBlockElements[i].id)

      // apply new class if task is present/past/future
      if (elementID < currentHour) {
          $(manipID).addClass("past");
      } else if (elementID > currentHour) {
          $(manipID).addClass("future");
      } else {
          $(manipID).addClass("present");
      }
  }
    // $(".textarea").each(function(index,item){ 
    //   var hourInt = parseInt(currentHour); 
    //   var blockValue = parseInt($(item).data('index'));
    //   if(blockValue === hourInt){
    //       $("textarea").addClass('present');
    //   } else if (blockValue < hourInt) {
    //     $("textarea").addClass('past');
    //   } else {
    //     $("textarea").addClass('future');
    //   }
    // });
};

colorTime(); 

//updates page every 15s
var runAgain = window.setInterval(function() {
    colorTime();
}, 15000); 


