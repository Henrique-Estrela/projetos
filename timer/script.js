let sec = 0;
let min = 0;
let hr = 0;
let intervalo;

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start() {
    timer()
    intervalo = setInterval(timer,1000);
}

function pause() {
    clearInterval(intervalo);
};

function stop() {
    clearInterval(intervalo);
    sec=0;
    min=0;
    
    window.alert("Você parou em: "+document.getElementById('time').innerText);
    document.getElementById('time').innerText = "00:00:00";
};

function timer() {
    sec++
    if(sec==60){
        min++
        sec = 0
        if(min==60){
            hr++
            min = 0
        };
    };
    
    document.getElementById('time').innerText =twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}