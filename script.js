// const start = document.getElementById('startBtn');
// const stop = document.getElementById('stopBtn');
// const reset = document.getElementById('resetBtn');

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start(){
 timer = true;
 stopwatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById('count').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('hr').innerHTML = "00";
    
}

function stopwatch(){

    if(timer == true){
        count = count+1;
        if(count == 100){
            sec = sec + 1;
            count = 0;
        }
        if(sec == 60){
            min = min +1;
            sec = 0;
        }
        if(min == 60){
            hr = hr+1;
            min = 0;
            sec = 0;
        }
        
        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countStritng = count;
        if(sec < 10){
            secString = '0' + secString;
        }
        if(min < 10){
            minString = '0' + minString;
        }
        if(hr<10){
            hrString = '0' + hrString;
        }



        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = count;
        

        setTimeout("stopwatch()",10);
    }
}