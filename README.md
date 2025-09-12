# EXP_REG
Um estudo pessoal para maior aprendizado e documentação de expressões regulares. Irei anotar e documentar tudo oque aprendi neste documento.

# Aula 1 
Estamos aprendendo a base das expressões regulares. Com início foi mostrado que as expressões ficam entre duas barras, **exemplo:** /João/.

Foi utilizada a ideia de busca em um texto, então colocamos o nome do personagem para busca assim como foi dito acima. 

Foi Apresentada as principais formas de especificar a forma de pesquisa que a expressão iria fazer:

**g** - usado para uma pesquisa global, pois sem ele, por padrão buscaria somente a primeira vez que é citado "João" no texto. Se for utilizado o **g**, podemos buscar todas as vezes em que João foi citado no texto.

**i** - este é utilizado para ignorar a padronização de pesquisa, podendo fazer a busca achar não só "João",  mas também "JOÃO" ou "joão" (letras minúsculas ou maiúsculas).

Criando assim: 

`const expReg = /João/gi;`

Podendo citar mais coisas, assim:

`const expReg = /(maria|joão|luiz)(, hoje sua esposa)/i;`

**|** - este sinal, assim como OR, que usamos ||, aqui utilizamos somente um para representar o OR.

## Metodos 

Agora vem os metodos que utilizamos para realizar estas buscas, veja abaixo os metodos que foi visto nesta primeira aula:

### .test

o test é utilizado para nos retornar um valor booleano em resposta à busca do dado solicitado, no caso de pesquisar João, ele retornaria true, caso digitássemos outro nome que não aparece no texto, ele retornaria false.

**Exemplo:** 

**texto:**

João trouxe flores para sua amada namorada em 10 de janeiro de 1970, Nicoli era o nome dela.


Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente. maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo.
Não canso de ouvir a Maria:
"Jooooooooooãooooooo, o café ta prontinho aqui. Veeemm"!

**código:**

`const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;`

`const found = expReg.test(texto);`

`console.log(found);`

**console:**

```
  true
```

### .exec

Já com o metodo .exec, podemos extrair coisas deste texto. buscar a posição dos dados e tudo mais. caso não seja encontrado, será retornado `null`.

# Aula 2 - String Match e Replace

Aprendemos nessa aula sobre replace e match. Replace é utilizado para alterarmos um dado pegado com a expressão regular, maniupular uma string com esta função é uma ótima escolha. Já o match é utilizado para que possamos fazer encontros dentro da string, então, tudo que corresponde à expressão regular passada para o match, será retornado. Então para utilizar estes dois, é importante se lembrar de passar a expressão regular com as regras de global e insensitive.

# Aula 3 - Quantificadores

aprendemos a usar alguns dos tipos de quantificadores entre a expressão regular, como essas à seguir:

- \* -> (opcional) 0 ou n

- \+ -> (obrigatório) 1 ou n

- ? -> (opcional) 0 ou 1

- \ -> Carectere de escape

através destes, podemos criar regras importantes em expressões regulares, vamos testar usando o exemplo de formatos de arquivos:

- Atenção.jpg
- FOTO.jpeg
- Meu gatinho.jpg
- Meu gatinho.JPG
- Meu gatinho.JPEG
- Meu gatinho.JPEeeEEG

com este mesmo exemplo utilizado na base para a aula3.js, podemos buscar os arquivos jpg que podem ser escritos de formas diferentes:

`const regExp2 = /\.jpe?g/gi;`

utilizamos a barra ivertida para podermos utilizar o ponto normalmente sem que reconheça como algum comando. Também colocamos a interrogação para que possamos fazer reconhecer apenas se o arquivo ter no máximo um E, minúsculo ou maiúsculo, já que arquivos jpg podem ter a escrita em jpeg, sendo os dois em maiúsculo também, precisando assim adicionar apenas o case isensitive no final da expressão para ignorar letras minúsculas ou maiúsculas. 

`for (const arquivo of arquivos) {`

`const valido = arquivo.match(regExp2);`

`if(!valido) continue;`

`console.log(arquivo, valido);`

`}`

com esta repetição podemos ver no console como ficaria a busca com match baseado com a nossa expressão regular. Agora é isso oque sabemos sobre as regras de quantificadores em expressões regulares, as coisas daqui para frente será uma junção de tudo oque aprendemos até então.

# Aula 4 - Greedy e non-greedy (lazy)

### Greedy

este seria um ganacioso, responsável por ser uma forma de capturar vários dados de uma vez, assim como foi registrado em aula4.js. Ele é responsável por capturar todas as suas especificações sem separações, pegando um elemento por inteiro, um exemplo bom para ser usado, seria capturar uma div com diversos elementos dentro de si.

### Non-greedy

já o non greedy, ele separaria à cada fim de um elemento os dados buscados, no caso de se utilizar o match, então um não se torna melhor que o outro, mas cada um tem seu momento certo de utilização.
