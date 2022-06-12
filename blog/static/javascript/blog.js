var salary = 0;
var realAmount = 0;


function calculateData(){
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var start_time = document.getElementById("start_time").value;
    var end_time = document.getElementById("end_time").value;

    const date1 = new Date(Number(date.substring(0, 4)), Number(date.substring(5, 7)), Number(date.substring(8, 10)),  Number(start_time.substring(0, 2)), Number(start_time.substring(3, 5)));
    const date2 = new Date(Number(date.substring(0, 4)), Number(date.substring(5, 7)), Number(date.substring(8, 10)),  Number(end_time.substring(0, 2)), Number(end_time.substring(3, 5)));
    const elapsedMSec = date2.getTime() - date1.getTime();
    const elapsedMin = elapsedMSec / 1000 / 60 % 60;
    const elapsedHour = elapsedMSec / 1000 / 60 / 60;

    var work = parseInt(elapsedHour / 1) + "시간" + elapsedMin + "분"; // 일한 시간 + 분
    var day_charge = elapsedHour*10000; // 일급
    if (name != '' && date != '' && start_time != '' && end_time != ''){
        document.getElementById("content").innerHTML += "<div>" + date + " " + name + " " +  work + " " + day_charge + "</div>";
        salary += day_charge;
    }
}

function cleanData(){
    var name = document.getElementById("name");
    var date = document.getElementById("date");
    var start_time = document.getElementById("start_time");
    var end_time = document.getElementById("end_time");
    name.value = '';
    date.value = '';
    start_time.value = '';
    end_time.value = '';
}

function calculateSalary(){
    document.getElementById("salary").innerHTML = "<div>월급 : " + salary + "</div>";
    document.getElementById("salary").innerHTML += "<div>3.3% 공제 금액 : " + salary * 0.967 + "</div>";
}
