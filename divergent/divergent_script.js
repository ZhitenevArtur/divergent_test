questionNumb = 1;
let answersFirst = [];
let answersSecond = [];
let markFirst = [];
let markSecond = [];
let timeToTest = 180; 

function showFirstQuestion() {
	document.getElementById('instructions').style.display = 'none';
	document.getElementById('testing').style.display = 'flex';
	countdown();
}

let start = timeToTest;
let timer;

function countdown () {
	document.getElementById('clock').innerHTML = secToMin(start);
	start--;
	if (start<0){
		clearTimeout(timer);
		questionNumb++;
		if (questionNumb == 2) {
			showDummyMessage()
		}
		else showMarkMessage();
	}
	else {
		timer = setTimeout(countdown, 1000);
	}
}

function secToMin (seconds) {
	out = Math.floor(seconds/60)+':';
	if(seconds-(Math.floor(seconds/60)*60)<10) out+='0';
	out +=(seconds-(Math.floor(seconds/60)*60));
	return out;
}

function getAnswer () {
	var inputValue = document.getElementById("userAnswer").value;
	if (questionNumb == 1){
		answersFirst.push(inputValue);
	}
	else answersSecond.push(inputValue);
	document.getElementById("userAnswer").value = '';
	document.getElementById("answList").innerHTML += "<p>"+inputValue+"</p>";
}

function showDummyMessage () {
	document.getElementById('testing').style.display = 'none';
	document.getElementById('dummy').style.display = 'block';
}

function showSecondQuestion () {
	document.getElementById('dummy').style.display = 'none';
	document.getElementById('testing').style.display = 'flex';
	document.getElementById('stimulus').innerHTML = document.getElementById('stimulus').innerHTML.replace('ГАЗЕТА', 'ДЕРЕВЯННАЯ ЛИНЕЙКА');
	document.getElementById('answList').innerHTML = '<p>Здесь будут появляться ваши ответы:</p>';
	start = timeToTest;
	timer = 0;
	countdown();
}

function showMarkMessage () {
	document.getElementById('testing').style.display = 'none';
	document.getElementById('marker').style.display = 'block';
	if(answersFirst.length == 0){
		questionNumb = 2;
		document.getElementById('answer').innerHTML = answersSecond[0];
	}
	else {
		questionNumb = 1;
		document.getElementById('answer').innerHTML = answersFirst[0];
	}
}

function showEndingMessage (argument) {
	document.getElementById('marker').style.display = 'none';
	document.getElementById('ending').style.display = 'block';

	sessionStorage.divergentFirstAnswer = JSON.stringify(answersFirst);
	sessionStorage.divergentSecondAnswer = JSON.stringify(answersSecond);
	sessionStorage.divergentFirstMarks = JSON.stringify(markFirst);
	sessionStorage.divergentSecondMarks = JSON.stringify(markSecond);
	sessionStorage.divergent = 1;
}

let qurrentAnswer = 0;

function markAnswer (option){
	if(questionNumb == 1){
		markFirst.push(option);
		qurrentAnswer++;
		if(qurrentAnswer >= answersFirst.length){
			questionNumb = 2;
			qurrentAnswer = 0;
			if (answersSecond.length != 0){
				document.getElementById('answer').innerHTML = answersSecond[qurrentAnswer];
			}
			else showEndingMessage();
		}
		else{
			document.getElementById('answer').innerHTML = answersFirst[qurrentAnswer];
		}
	}
	else if(questionNumb == 2){
		markSecond.push(option);
		qurrentAnswer++;
		document.getElementById('answer').innerHTML = answersSecond[qurrentAnswer];
		if(qurrentAnswer >= answersSecond.length){
			showEndingMessage();
		}
	}
	else showEndingMessage();
}