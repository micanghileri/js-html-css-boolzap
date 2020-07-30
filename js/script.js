$(document).ready(function(){
    // creo array con frasi casuali
    var arrAnswer = [
        '<p class="testo-msg">Buonasera</p>',
        '<p class="testo-msg">Buonanotte</p>',
        '<p class="testo-msg">Ciao</p>',
        '<p class="testo-msg">Non ci credo</p>',
    ]
    // invio il messaggio con la pressione del tasto invio
    $('#mioMessaggio').keydown(send);
    // creo una funzione per clonare il template e inviare il mio mess e ricevere risposta
    function send(){
        if (event.which == 13 || event.keydown == 13 ) {
            var messaggio = $('#mioMessaggio').val();
            // invio il mio messaggio
            if(messaggio!=""){
                var clonazione = $('.template .message').clone();
                var ora = time();
                clonazione.append('<p class="testo-msg">' + messaggio + '</p>');
                clonazione.append('<p class="ora-msg">' + ora + '</p>');
                clonazione.append('<div class="quadrato-verde"></div>');
                clonazione.addClass('msg-mio');

                $('#area-dx #area-chat').append(clonazione);
                document.getElementById("mioMessaggio").value="";
                setInterval(updateScroll,0);
                // creo una funzione per rispondere automaticamente
                setTimeout(function(){
                    copiaClone = $('.template .message').clone();
                    var tuoMessaggio = arrAnswer[rispostaRandom(arrAnswer.length, 0)];
                    copiaClone.append('<p class="testo-msg">' + tuoMessaggio + '</p>');
                    copiaClone.append('<p class="ora-msg">' + ora + '</p>');
                    copiaClone.append('<div class="quadrato-bianco"></div>');
                    copiaClone.addClass('msg-altro');
                    $('#area-dx #area-chat').append(copiaClone);
                    setInterval(updateScroll,0);
                },1000)
            }
        }
    }

// ******FUNZIONI******
    // funzione per randomizzare risposta
    function rispostaRandom(min, max) {
      return Math.floor(Math.random()*(max - min))+min;
    }
    // funzione addzero
    function addZero(i) {
     if (i < 10) {
       i = "0" + i;
     }
     return i;
    }
    // funzione orario
    function time() {
        var d = new Date();
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var x = h + ':' + m;
     return x;
    }
    // creo una funzione per lo scroll automatico della chat
    function updateScroll(){
    var element = document.getElementById("area-chat");
    element.scrollTop = element.scrollHeight;
    }
});
