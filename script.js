//var currentHr = document.getElementsByClassName("time-block"); 

var saveBtn = $('saveBtn'); 


var currentDay = moment().format("dddd, MMMM Do YYYY"); 
$("#currentDay").text(currentDay);

var currentHour = moment().format("HH");

function colorTime() {
    $('.time-block').each(function(index,item){ 
      var hourInt = parseInt(currentHour); 
      var blockValue = parseInt($(item).data('number'));
      if(blockValue === hourInt){
          $(".textarea").addClass('present');
      } else if (blockValue < hourInt) {
        $(".textarea").addClass('past');
      } else {
        $(".textarea").addClass('future');
      }
    });
};

colorTime(); 

var runAgain = window.setInterval(function() {
    colorTime();
}, 15000); 


