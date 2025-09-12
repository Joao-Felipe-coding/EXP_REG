const { texto, arquivos } = require('./base');

//* (opcional) 0 ou n
//+ (obrigatório) 1 ou n
//? (opcional) 0 ou 1
//\ Carectere de escape
//{min, max} minimo e máximo
//{10,} no mínimo 10
//{,10} de 0 a 10
//{5,10} de 5 a 10
//{10}

// console.log(texto);
// const regExp1 = /Jo+ão+/gi;
// console.log(texto.match(regExp1));

const regExp2 = /\.jpe?g/gi;

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2);

  if(!valido) continue;
  console.log(arquivo, valido);
}