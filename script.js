// Seleciona os ponteiro do relogio
let digital = document.querySelector('.digital'),
    sEle = document.querySelector('.p_s');
    mEle = document.querySelector('.p_m');
    hEle = document.querySelector('.p_h');

// Atualiza o relogio de acordo com a Date() atual
    function updateClock(){
        let currentDate = new Date(),
            hour = currentDate.getHours(),
            minute = currentDate.getMinutes(),
            second = currentDate.getSeconds();

        digital.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

        let sDeg = ((360 / 60) * second) - 90,
            mDeg = ((360 / 60) * minute) - 90,
            hDeg = ((360 / 12) * hour) - 90;

        sEle.style.transform = `rotate(${sDeg}deg)`;
        mEle.style.transform = `rotate(${mDeg}deg)`;
        hEle.style.transform = `rotate(${hDeg}deg)`;
    }

    function fixZero(time){
       return time < 10 ? '0'+time : time;
    }

// setIterval para roda a funcao updateClock a cada 1s
    setInterval(updateClock, 1000);
    updateClock();