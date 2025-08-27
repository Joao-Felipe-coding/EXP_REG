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

