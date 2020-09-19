function goToNextStage () {
	document.getElementById('instructions').style.display = 'none';
	document.getElementById('testing').style.display = 'flex';
	countdown();
}

let start = 180;
let timer;

function countdown () {
	document.getElementById('clock').innerHTML = secToMin(start);
	start--; // уменьшаем число на единицу
	if (start<0){
		clearTimeout(timer); // таймер остановится на нуле
    	alert('stop');
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
	document.getElementById("userAnswer").value = '';
	document.getElementById("answList").innerHTML += "<p>"+inputValue+"</p>";
}