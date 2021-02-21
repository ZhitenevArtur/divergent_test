questionNumb = 0;

solutionTable = [5, 7, 3, 6, 8, 5, 2, 2, 6, 3, 8, 6, 7, 7, 6, 4, 5, 3];
result = 0;

answers = [];

let timeToTest = 720;
let start = timeToTest;
let timer;

function startTesting() {
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('testing').style.display = 'flex';
    showQuestion();
    showOption();
    countdown()
}

function nextQuestion() {
    if (questionNumb == 17) {
        showEndingMessage()
    }
    else {
        questionNumb++;
        showQuestion();
        showOption();
    }
}

function showEndingMessage() {
    for (var i = 0; i < answers.length; i++) {
        final += answers[i];
    }

    document.getElementById('testing').style.display = 'none';
    document.getElementById('final').style.display = 'block';
    document.getElementById('answers').innerHTML += answers;
    document.getElementById('total').innerHTML += result;

    sessionStorage.ravensAnswers = JSON.stringify(answers);
	sessionStorage.ravensResult = JSON.stringify(result);
	sessionStorage.ravens = 1;
}

function countdown() {
    document.getElementById('clock').innerHTML = secToMin(start);
    start--;
    if (start < 0 && questionNumb!=17) {
        showEndingMessage()
    }
    else {
        timer = setTimeout(countdown, 1000);
    }
}

function secToMin(seconds) {
    out = Math.floor(seconds / 60) + ':';
    if (seconds - (Math.floor(seconds / 60) * 60) < 10) out += '0';
    out += (seconds - (Math.floor(seconds / 60) * 60));
    return out;
}

function getAnswer(value) {
    if (value == solutionTable[questionNumb]) result++;
    answers.push(value);
    nextQuestion();
}

function showOption() {
    let string = '';
    for (let i = 0; i < 8; i++) {
        string += "<button value = '" + String(i + 1) + "' onclick = 'getAnswer(this.value)' > <img src='../source/img/ravens/raven-" + String(questionNumb + 1) + "-assets/a-" + String(questionNumb + 1) + "-" + String(i + 1) +".png' class='answer-img'></button>"
    }
    document.getElementById('option').innerHTML = string;
}

function showQuestion() {
    document.getElementById('question').innerHTML = "<img src='../source/img/ravens/raven-" + String(questionNumb + 1) + "-assets/q-" + String(questionNumb + 1) + ".png' class='question-img'>";
}