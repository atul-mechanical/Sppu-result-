function checkResult(){

    let prn = document.getElementById("prn").value.trim().toUpperCase();

    if(prn === "72240563E"){

        document.getElementById("result").style.display="block";

        document.getElementById("studentName").innerHTML="ATUL BAPU GANGURDE";
        document.getElementById("studentPRN").innerHTML="72240563E";
        document.getElementById("seatNo").innerHTML="B400410087";
        document.getElementById("college").innerHTML="Brahma Valley College of Engineering";
        document.getElementById("course").innerHTML="Mechanical Engineering";
        document.getElementById("semester").innerHTML="Semester VII & Semester VIII";
        document.getElementById("sgpa").innerHTML="9.40";
        document.getElementById("cgpa").innerHTML="8.90";

    }

    else{

        alert("Invalid PRN / Application Number");
        document.getElementById("result").style.display="none";

    }

}
