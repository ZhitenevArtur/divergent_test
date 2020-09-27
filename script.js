var subject = new Object();

document.getElementById("formSubmit").onclick = function setSubject(){
	form = document.getElementById("subject");
	subject.lastname = form.lastname.value;
	subject.name = form.name.value;
	subject.midname = form.midname.value;
	subject.age = form.age.value;
	subject.sex = form.sex.value;
	subject.university = form.university.value;
	subject.faculty = form.faculty.value;
	subject.email = form.email.value;
}