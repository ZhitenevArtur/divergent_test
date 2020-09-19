questionNumb = 1;
let answersFirst = [];
let answersSecond = [];
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
		else alert('end');
    	
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
	document.getElementById('img').innerHTML = document.getElementById('img').innerHTML.replace('newspapper.png', 'liner.png');
	document.getElementById('answList').innerHTML = '<p>Здесь будут появляться ваши ответы:</p>';
	start = timeToTest;
	timer = 0;
	countdown();
}