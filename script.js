const $days = document.getElementById(`days`),
$hours = document.getElementById(`hours`),
$min = document.getElementById(`min`),
$sec = document.getElementById(`sec`),
$FinalMessage = document.querySelector(`.final-message`);

//Fecha Futuro
const countdownDate = new Date(`Mar 29,2025 15:00:00`).getTime();

let interval = setInterval(function(){
    //Obtener fecha actual milisegundos
    const now = new Date().getTime();
    
    //Obtener las distancias entre fechas
    let distance = countdownDate - now;
    
    //Calculo a días, horas, min ,sec
    let days = Math.floor(distance / (1000* 60 * 60 * 24));
    let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    let min = Math.floor((distance % (1000*60*60))/(1000*60));
    let sec= Math.floor((distance % (1000*60))/(1000));
    
    //Escribir resultados
    $days.innerHTML= days;
    $hours.innerHTML=(`0` + hours).slice(-2);
    $min.innerHTML= (`0` + min).slice(-2);
    $sec.innerHTML= (`0` + sec).slice(-2);
    
    //Cuando llegue a 0
    if(distance<0){
        clearInterval(interval);
        $FinalMessage.style.transform = `translateY(0)`
    } 
}, 1000);