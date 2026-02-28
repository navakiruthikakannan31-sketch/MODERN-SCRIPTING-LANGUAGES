function calculateAge() {

    let dob = document.getElementById("dob").value;

    if(dob === ""){
        document.getElementById("result").innerText =
        "Please select your birth date";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if(days < 0){
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if(months < 0){
        years--;
        months += 12;
    }

    document.getElementById("result").innerText =
        `You are ${years} Years ${months} Months ${days} Days old 🎉`;
}
