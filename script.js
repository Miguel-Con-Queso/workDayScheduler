var currentDay = document.querySelector("#currentDay");

// display current day
function setTime() {
    var time = moment().format("dddd, MMM Do YYYY");

    currentDay.innerHTML = time;
};

// main function
$(document).ready(function () {

    // applies correct style based on whether event is in the past, present, or future
    function checkTimeStatus() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (timeBlock === currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    };

    // save events to localStorage
    $(".saveBtn").on("click", function () {

        var event = $(this).siblings(".description").val();
        var timeSlot = $(this).parent().attr("id");

        localStorage.setItem(timeSlot, event);
    })

    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    checkTimeStatus();
});

setTime();