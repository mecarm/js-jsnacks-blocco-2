const nomi = ['Carmine', 'Fabio', 'Belen', 'Marco', 'Francesco', 'Sophia', 'Stella'];
const cognomi = ['Mele', 'Rossi', 'Rodriguez', 'Iossa', 'Esposito', 'Piccolo', 'Rufolo'];



function myFunction() {
    let randomName =  nomi[Math.floor(Math.random() * nomi.length)];
    let randomSurname =  cognomi[Math.floor(Math.random() * cognomi.length)];
    let randomPerson = randomName + ' ' + randomSurname;
    let pippo = document.createElement("li");
    let li = document.createTextNode(randomPerson);
    pippo.appendChild(li);
    document.getElementById("invitato").appendChild (pippo);
  }