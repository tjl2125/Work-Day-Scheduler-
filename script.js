//var currentHr = document.getElementsByClassName("time-block"); 

// update the current day at the top
// var todayDate = moment().format("dddd, MMMM Do YYYY");
// $("#currentDay").text(todayDate);
// //get the current hour
// var currentHour = moment().format("HH");
// console.log(currentHour);

var saveBtn = $('saveBtn'); 

var currentDay = moment().format("dddd, MMMM Do YYYY"); 
$("#currentDay").text(currentDay);

var currentHour = moment().format("HH");

function colorTime () {
    $('.time-block').each(function(index,item){
        var currentInt = parseInt(currentHour);
        var blockValue = parseInt($(item).data('hour'));
        if (blockValue === currentInt){
            $(item).addClass('present');
        }else if (blockValue < currentInt) {
            $(item).addClass('past');
        }else {
            $(item).addClass('future');
        }
    });
};

colorTime(); 


// var checkTime = function () {

//     //Get Current time
//     var currentTime = moment().format('H');

//     //get all elements with class "taskarea"
//     var timeBlockElements = $(".textarea");

//     //loop through taskarea classes
//     for (var i = 0 ; i < timeBlockElements.length ; i++) {

//         //Get element i's ID as a string
//         var elementID = timeBlockElements[i].id;

//         //get element by ID
//         var manipID = document.getElementById(timeBlockElements[i].id)

//         //remove any old classes from element
//         //$(timeBlockElements[i].id).removeClass(".present .past .future");

//         // apply new class if task is present/past/future
//         if (elementID < currentTime) {
//             $(manipID).addClass(".past");
//         } else if (elementID > currentTime) {
//             $(manipID).addClass(".future");
//         } else {
//             $(manipID).addClass(".present");
//         }
//     }
// }

// // checkTime every 5 minutes
// setInterval(checkTime(), (1000 * 60) * 5);