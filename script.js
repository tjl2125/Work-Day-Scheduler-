var currentHr = document.getElementsByClassName("input-group input-group-lg"); 


var currentTime = moment().format("dddd, MMMM Do YYYY"); 
$("#currentDay").text(currentTime);

function startScheduler () {

}

function time {
    if (currentHr == currentTime) {
        document.style.background-color = $(".present"); 
    }
}