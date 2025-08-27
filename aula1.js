// g - global (encontra todas as ocorrrências)
// i - insensitive (ignora a procura padrão e generaliza as letras para diferentes formatações)
// GRUPOS - ()
// OU - |
const { texto } = require('./base');
const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i; 
const found = regExp1.exec(texto);

console.log(found[0]);
console.log(found[1]);
console.log(found[2]);