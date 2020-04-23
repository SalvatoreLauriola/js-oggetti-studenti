$(document).ready(function() {   // inizio doc ready

// refs

// variabile che prende l'input del messaggio
var input = $('.mess-input');

// variabile che prende il bottone
var button = $('.mess-btn');

// variabile che prende la sezione in cui verrà inserito il messaggio
var chat = $('.chat');

//entriamo nel template di html
var source = $("#message-template").html();

//compiliamo il template con il template stesso clonato da html
var template = Handlebars.compile(source);

//Inseriamo un nuovo messaggio al click
button.click(function(){

  //creiamo una variabile in cui inseriremo il valore dell'input
  var message = input.val().trim()

  // creiamo una var con i dati dinamici che andranno nel template handlebars
  var data = {

    // il testo sarà il messaggio inserito
      text: message,
    
      time: '12:10',

    // la classe applicata sarà quella del messaggio inviato
      user: 'sent'
  };
  var html = template(data);

  // reinseriamo il template popolato nell'html, nella sezione chat
  chat.append(html);
  
  //puliamo l'input 
  input.val('');

  //impostiamo un timer automatico
  setTimeout(function(){

    //ripopoliamo la var data diversamente con la risposta e la classe che si riferisce allo stile ricevuto;
      var data = {
          text: 'ok',
          time: '12:18',
          user: 'received'
        };var html = template(data);
  
        // reinseriamo il template popolato nell'html, nella sezione chat
        chat.append(html);
        
        
        
  }, 1000);

});



















})  // fine doc ready