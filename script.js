function checkResult(){

let prn = document.getElementById("prn").value.trim().toUpperCase();

if(prn === "72240563E"){

document.getElementById("result").style.display="block";

studentName.innerHTML="ATUL BAPU GANGURDE";
studentPRN.innerHTML="72240563E";
seatNo.innerHTML="B400410087";
college.innerHTML="Brahma Valley College of Engineering";
course.innerHTML="
semester.innerHTML="Semester VII & Semester VIII";
sgpa.innerHTML="9.40";
cgpa.innerHTML="8.90";

}

else{
alert("Invalid PRN / Application Number");
document.getElementById("result").style.display="none";
}

}
