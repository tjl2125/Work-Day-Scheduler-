//var currentHr = document.getElementsByClassName("time-block"); 

// update the current day at the top
// var todayDate = moment().format("dddd, MMMM Do YYYY");
// $("#currentDay").text(todayDate);
// //get the current hour
// var currentHour = moment().format("HH");
// console.log(currentHour);
var timeArray = [$('#btn9').text(), $('#btn10').text(), $('#btn11').text(), $('#btn12').text(), $('#btn13').text(), $('#btn14').text(), $('#btn15').text(), $('#btn16').text(), $('#btn17').text()]
var saveBtn = $('saveBtn'); 

var currentDay = moment().format("dddd, MMMM Do YYYY"); 
$("#currentDay").text(currentDay);

var currentHour = moment().format("HH");

function colorTime () {
    for (var i = 0; i < timeArray.length; i++) {
        var hours = (moment(timeArray[i], "H a"));
        var presentHour = moment(currentHour, "H a");
        console.log(hours);
        console.log(presentHour);
        if (presentHour.isSame(hours)) {
            $('.textarea').addClass(".present");
        } else if (presentHour.isAfter(hours)) {
            $('.textarea').addClass(".future");
        } else {
            (presentHour.isBefore(hours))
            $('.textarea').addClass(".past");
        }
    }
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