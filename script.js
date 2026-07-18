function checkResult() {

    let prn = document.getElementById("prn").value.trim().toUpperCase();

    if(prn === "72240563E"){
        document.getElementById("result").style.display="block";
    }else{
        alert("Invalid PRN / Application Number");
        document.getElementById("result").style.display="none";
    }

}
