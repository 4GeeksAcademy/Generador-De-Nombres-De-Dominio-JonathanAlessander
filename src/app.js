 window.onload = function() {
  //write your code here
function Generador() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let domainHacks = ['.es', '.com'];

  let tex1 = pronoun[Math.floor(Math.random() * pronoun.length)];
  let tex2 = adj[Math.floor(Math.random() * adj.length)];
  let tex3 = noun[Math.floor(Math.random() * noun.length)];
  let tex4 = domainHacks[Math.floor(Math.random() * domainHacks.length)];
  console.log(tex1 + tex2 + tex3 + tex4)
}

Generador()
Generador()
Generador()
Generador()
Generador()
Generador()
Generador()
Generador()

};