function countdown(timer_id, ) {
    document.getElementById(timer_id).innerHTML = secToMin(start);
    start--;
    if (start < 0) {
        clearTimeout(timer);
        questionNumb++;
        if (questionNumb == 2) {
            showDummyMessage()
        }
        else showEndingMessage();
    }
    else {
        timer = setTimeout(countdown, 1000);
    }
}