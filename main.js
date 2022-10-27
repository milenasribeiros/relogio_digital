function CriarRelogio(){
    var dataTime = new Date();
    var horas = dataTime.getHours();
    var minutos = dataTime.getMinutes();
    var segundos = dataTime.getSeconds();

    if(horas < 10){
        horas = '0' + horas;
    } if (minutos < 10) {
        minutos = '0' + minutos;
    } if (segundos < 10) {
        segundos = '0' + segundos;
    }

    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;

}

setInterval(CriarRelogio, 10)