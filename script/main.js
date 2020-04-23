var studente = {
  nome: 'Michele',
  cognome : 'Rossi',
  età : 20
}

console.log(studente);

for (var key in studente) {

    // console.log(key);
    // console.log( studente[key] );

    console.log(key + ': ' + studente[key]);



}