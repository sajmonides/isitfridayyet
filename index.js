function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function checkIfThursdayInterval(intervalInMinutes = 1) {
    console.log("Checking every " + intervalInMinutes + " minute(s).");
    const timeoutInMilli = intervalInMinutes * 1000 * 60;
    setInterval(checkIfThursday, timeoutInMilli);
}

function checkIfThursday() {
    console.log("Checking if Thursday");
    const answer = document.getElementById("answer");
    const date = new Date();
    // Is it Thursday yet?
    if (date.getDay() === 4) {
        answer.innerText = "Yes";
    } else if (date.getDay() === 3) {
        answer.innerText = "Soon";
    } else {
        answer.innerText = "Nope";
    }
}

docReady(() => {
    checkIfThursday();
    checkIfThursdayInterval();
});
