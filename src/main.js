window.onload = function() {
  // array with the words
  let first = "Un ";
  let adj = ["Molesto ", "Maleducado ", "Grosero ", "demoniaco ", "loco ", "Despampanante ", "Impulsivo "];
  let noun = ["perro ", "abuelo ", "payaso ", "soldado ", "programador ", "raton ", "papanatas "];
  let action = ["se llevo mi ", "mordio mi ", "me grito ", "me robo mi", "mintio sobre mi ", "se burlo de mi", "se rio de mi", "volo sobre mi "];
  let possetion = ["rasho laser ", "carro ", "reloj ", "foto en pijamas ", "situacion economica ", "camisa ", "llavero ", "-ordenador ", "movil ", "sandwich "];
  let where = ["en el hospital", "en mi casa", "en el estadio", "frente a mi mama", "cerca del super", "por el baño", "en la estacion"];

  
  // declaring random variables
  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5];
  
}
