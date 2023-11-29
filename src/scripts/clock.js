
  
    function displayDayOfWeek(){
        let D = new Date();
        let WK = new Array(7);
        WK[0] =  "Sunday";
        WK[1] = "Monday";
        WK[2] = "Tuesday";
        WK[3] = "Wednesday";
        WK[4] = "Thursday";
        WK[5] = "Friday";
        WK[6] = "Saturday";    
        let DW = WK[D.getDay()];
        let DOW = document.getElementById('dow');
        DOW.innerText = DW;
    }
   
    function displayFulldate(){
        let D = new Date();
        let M = new Array();
            M[0] = "January";
            M[1] = "February";
            M[2] = "March";
            M[3] = "April";
            M[4] = "May";
            M[5] = "June";
            M[6] = "July";
            M[7] = "August";
            M[8] = "September";
            M[9] = "October";
            M[10] = "November";
            M[11] = "December";
        let Da = D.getDate();
        let N = M[D.getMonth()];
        let Y = D.getFullYear()+ " " + N + " " + Da;
        let fulldate = document.getElementById('date');  
        fulldate.innerText = Y;      
    }
     
    
    function displayTime(){
        let D = new Date();
        let Hour = D.getHours();
        let Min = D.getMinutes();
        let Sec = D.getSeconds();
        let clockDiv = document.getElementById('clock');
        let meridiem = "AM";
        // add zero to Sec
        if(Sec<10){
            Sec = "0" + Sec;
        }
        if(Min < 10){
            Min = "0" + Min;
        }
        // convert 24 hour to 12 hour format
        // and keep track of meridiem 
        if(Hour>12){
            Hour = Hour - 12;
            meridiem = "PM";
        }
        // 0 am and 0 pm should read as 12
        if(Hour==0){
            Hour = 12;
        }
        //add clock with meridiem
        clockDiv.innerText = Hour +":"+ Min+":"+ Sec + " " + meridiem;
    }
    displayTime();  
    displayDayOfWeek();
    displayFulldate(); 
    setInterval(displayTime,1000);
    

