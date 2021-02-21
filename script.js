var subject = new Object();
form = document.getElementById("subject");

window.onload = function(){
	if (!isBlank(sessionStorage.lastname)){
		form.lastname.value = sessionStorage.lastname;
		form.lastname.style = "border-bottom: 4px solid #34A853";
	}
	if (!isBlank(sessionStorage.name)){
		form.name.value = sessionStorage.name;
		form.name.style = "border-bottom: 4px solid #34A853";
	} 
	if (!isBlank(sessionStorage.midname)){
		form.midname.value = sessionStorage.midname;
		form.midname.style = "border-bottom: 4px solid #34A853";
	} 
	if (!isBlank(sessionStorage.age)){
		form.age.value = sessionStorage.age;
		form.age.style = "border-bottom: 4px solid #34A853";
	} 
	if (!isBlank(sessionStorage.sex)){
		form.sex.value = sessionStorage.sex;
		form.sex.style = "border-bottom: 4px solid #34A853";
	} 
	if (!isBlank(sessionStorage.university)){
		form.university.value = sessionStorage.university;
		form.university.style = "border-bottom: 4px solid #34A853";
	} 
	if (!isBlank(sessionStorage.faculty)){
		form.faculty.value = sessionStorage.faculty;
		form.faculty.style = "border-bottom: 4px solid #34A853";
	} 
	if (!isBlank(sessionStorage.email)){
		form.email.value = sessionStorage.email;
		form.email.style = "border-bottom: 4px solid #34A853";
	} 

	if (sessionStorage.divergent == 1) document.getElementById("divergent").style = "background-color: #fee000;"
	if (sessionStorage.karpovs == 1) document.getElementById("karpovs").style = "background-color: #4285F4;"
	if (sessionStorage.ravens == 1) document.getElementById("ravens").style = "background-color: #34A853;"

	if (sessionStorage.divergent == 1 && sessionStorage.karpovs == 1 && sessionStorage.ravens == 1) document.getElementById('downloadBlock').style.display = 'flex';
}

document.getElementById("formSubmit").onclick = function setSubject(){
	sessionStorage.setItem('lastname', form.lastname.value);
	sessionStorage.setItem('name', form.name.value);
	sessionStorage.setItem('midname', form.midname.value);
	sessionStorage.setItem('age', form.age.value);
	sessionStorage.setItem('sex', form.sex.value);
	sessionStorage.setItem('university', form.university.value);
	sessionStorage.setItem('faculty', form.faculty.value);
	sessionStorage.setItem('email', form.email.value);

	for (var i = 0, len = form.length-1; i < len; ++i) {
		form[i].style = "border-bottom: 4px solid #34A853";
	}

}

function isBlank(str) {
	return (!str || /^\s*$/.test(str));
}

document.getElementById("download").onclick = function downloadResult(){
	var wb = XLSX.utils.book_new(); //crt workbook
	wb.SheetNames.push("Result"); //crt worksheet
	var ws_data = [['Имя' , sessionStorage.name], 
			['Фамилия', sessionStorage.lastname],
			['Отчество', sessionStorage.midname],	
			['Возраст', sessionStorage.age],
			['Пол', sessionStorage.sex],
			['ВУЗ', sessionStorage.university],
			['Факультет', sessionStorage.faculty],
			['email', sessionStorage.email],
			['Газета', sessionStorage.divergentFirstAnswer],
			['Газета (чья идея)', sessionStorage.divergentFirstMarks],
			['Линейка', sessionStorage.divergentSecondAnswer],
			['Линейка (чья идея)', sessionStorage.divergentSecondMarks],
			['Карпов, ответы', sessionStorage.karpovsAnswers],
			['Карпов, результат', sessionStorage.karpovsResult],
			['Равен, ответы', sessionStorage.ravensAnswers],
			['Равен, результаты', sessionStorage.ravensResult]]; 
	var ws = XLSX.utils.aoa_to_sheet(ws_data);
	wb.Sheets["Result"] = ws;
	
	var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});

	var name = new Date().toISOString().slice(0, 19);
	saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), name+'.xlsx');
}

function s2ab(s) { 
	var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
	var view = new Uint8Array(buf);  //create uint8array as viewer
	for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
	return buf;    
}

document.getElementById("reset").onclick = function reset() {
	sessionStorage.clear();
	console.log("sessinon storage was cleared");
}