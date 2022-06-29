function carregar(){

    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var titulo = document.getElementById('titulo');
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    
    if (horas < 10){
        horas = '0' + horas;
    }
    if (minutos < 10){
        minutos = '0' + minutos;
    }
    if (segundos < 10){
        segundos = '0' + segundos;
    }
    
    if(horas < 2){ // Se for 1 hora, muda para 'Agora é 01:00:00'
        msg.innerHTML = `Agora é ${horas}:${minutos}:${segundos}.`;
    } else {
        msg.innerHTML = `Agora são ${horas}:${minutos}:${segundos}.`;
    }

    window.setInterval('carregar()',1000);

    if (horas >= 0 && horas < 12){
        // Bom dia!
        img.src = './assets/manha.png';

        document.body.style.backgroundImage = 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)';

        document.querySelector('header').style.color = 'black';
        document.querySelector('footer').style.color = 'black';

        titulo.innerHTML = 'Bom dia!'

    } else if (horas >= 12 && horas < 18){
        // Boa tarde!
        img.src = './assets/tarde.png';

        document.body.style.backgroundImage = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)';

        titulo.innerHTML = 'Boa tarde!'

    } else {
        // Boa noite!
        img.src = './assets/noite.png';

        document.body.style.backgroundImage = 'linear-gradient(to top, #30cfd0 0%, #330867 100%)';
    
        titulo.innerHTML = 'Boa noite!'
    }
}