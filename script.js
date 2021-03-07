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

//changes color of timeblocks depending on time 
function colorTime() {

    $(".textarea").each(function(index,item){ 
      var hourInt = parseInt(currentHour); 
      var blockTime = parseInt($(item).data('index'));
      if(blockTime === hourInt){
          $("textarea").addClass('present');
      } else if (blockTime < hourInt) {
        $("textarea").addClass('past');
      } else {
        $("textarea").addClass('future');
      }
    });
};

colorTime(); 

//updates page every 15s
var runAgain = window.setInterval(function() {
    colorTime();
}, 15000); 


