let dayInput=document.getElementById("day-input");
let monthInput=document.getElementById("month-input");
let yearInput=document.getElementById("year-input");
let yearOutput=document.getElementById("year-output");
let monthOutput=document.getElementById("month-output");
let dayOutput=document.getElementById("day-output");

let count=()=>{
    hideError("day");
    hideError("month");
    hideError("year");
    let day=parseInt(dayInput.value);
    let month=parseInt(monthInput.value);
    let year=parseInt(yearInput.value);
    let noError=false;
    let currentDate=new Date();
    if(!day){
        showError("This field is required","day");
    }else if(day<1 || day>31){
        showError("Must be a valid day","day");
    }else{
        noError=true;
    }

    if(!month){
        showError("This field is required","month");
    }else if(month<1 || month>12){
        console.log(month)
        showError("Must be a valid month","month");
    }else{
        noError=true;
    }

    if(!year){
        showError("This field is required","year");
    }else if(year<1){
        showError("Must be a valid year","year");
    }else if(year>new Date().getFullYear()){
        showError("Must be in the past","year");
    }else{
        noError=true;
    }

    if(noError){
        let currentDay=currentDate.getDate();
        let currentMonth=currentDate.getMonth()+1;
        let currentYear=currentDate.getFullYear();
        if(year===currentYear){
            if(month===currentMonth){
                console.log(month,currentMonth);
                if(day>currentDay){
                    alert("Must be in the past");
                }else{
                    calculate(day,month,year,currentDay,currentMonth,currentYear);
                }
            }else if(month>currentMonth){
                alert("Must be in the past");
            }else{
                calculate(day,month,year,currentDay,currentMonth,currentYear);
            }
        }else{
            console.log(year,currentYear);
            calculate(day,month,year,currentDay,currentMonth,currentYear);
        }
    }
    
}


function calculate(day,month,year,currentDay,currentMonth,currentYear){
    
    if(month>currentMonth){
        currentMonth+=12;
        currentYear-=1;
    }

    if(day>currentDay){
        currentDay+=30;
        currentMonth-=1;
    }

    console.log(currentDay-day);
    dayOutput.innerHTML=(currentDay-day)+" ";
    dayOutput.classList.add("number");
    console.log(currentMonth-month);
    monthOutput.innerHTML=(currentMonth-month)+" ";
    monthOutput.classList.add("number");
    console.log(currentYear-year);
    yearOutput.innerHTML=(currentYear-year)+" ";
    yearOutput.classList.add("number");
}

document.querySelector(".count-button").onclick=count;

let showError=(message,id)=>{
    let errorContainer=document.querySelector(`.input-group.${id}`);
    let errorBox=document.querySelector(`.input-group.${id} p:last-child`);
    errorContainer.classList.add("error");
    errorBox.innerHTML=message;
}

let hideError=(id)=>{
    let errorContainer=document.querySelector(`.input-group.${id}`);
    errorContainer.classList.remove("error");
}