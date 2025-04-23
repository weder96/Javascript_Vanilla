## Exercícios Práticos de HTML e JavaScript 

### Exercício 1: 
```HTML
<html> 
<head> 
 <title> Formulário Padrão HTML SEM JavaScript </title> 
</head> 
 
<body> 
 
<FORM ACTION="mailto:teste@gmail.com" METHOD="POST" ENCTYPE="text/plain" 
NAME="cadastro"> 
 
<p> Por favor, preencha os campos abaixo e depois clique no botão Enviar. Caso 
necessite apagar os dados, dê um clique no botão Limpar.<br> Muito Obrigado! 
<br><br><br></p> 
 
Nome Completo:   <INPUT TYPE="TEXT" NAME="nome" SIZE="35">  
 
Seu e-mail:   <INPUT TYPE="TEXT" NAME="email" SIZE="35"> <br> 
 
Sexo:<br>   
 <INPUT TYPE="RADIO" NAME="sexo" VALUE="f"> Feminino <br> 
 <INPUT TYPE="RADIO" NAME="sexo" VALUE="m"> Masculino <br><br> 
 
Estado Civil:<br> 
 <INPUT TYPE="RADIO" NAME="civil" VALUE="s"> Solteiro <br> 
 <INPUT TYPE="RADIO" NAME="civil" VALUE="c"> Casado <br> 
 <INPUT TYPE="RADIO" NAME="civil" VALUE="e"> Enrolado <br><br> 
 
Bens que possui:<br> 
 <INPUT TYPE="CHECKBOX" NAME="bens" VALUE="c"> Casa <br> 
 <INPUT TYPE="CHECKBOX" NAME="bens" VALUE="a"> Automovel <br> 
 <INPUT TYPE="CHECKBOX" NAME="bens" VALUE="m"> Moto <br><br> 
 
Faixa de idade:  <SELECT NAME="faixaidade"> 
 <OPTION VALUE="3a10"> 3 a 10 anos 
 <OPTION VALUE="11a25"> 11 a 25 anos 
 <OPTION VALUE="26a35"> 26 a 35 anos 
 <OPTION VALUE="36a55"> 36 a 55 anos 
 <OPTION VALUE="56a90"> 56 a 90 anos 
</SELECT> 
 
Hobby preferido: <SELECT NAME="hobby"> 
 <OPTION VALUE="livros"> Ler livros 
 <OPTION VALUE="musica"> Ouvir música 
 <OPTION VALUE="cinema"> Assistir filmes 
 <OPTION VALUE="esporte"> Praticar esportes 
 <OPTION VALUE="games"> Jogar games 
</SELECT><br><br> 
 
Observações Gerais:<br> 
<TEXTAREA NAME="observacoes" ROWS="5" COLS="60"></TEXTAREA><br> 
 
<INPUT TYPE="SUBMIT" VALUE="Enviar os dados"> 
<INPUT TYPE="RESET"  VALUE="Limpar os dados"> 
 
</FORM> 
</body> 
</html>  

```



### Exercício 2: 
### Use o Exercício 1, mas acrescentar na tag head os seguintes comandos: janela para ler 
```HTML
<head> 
    <title> Formulário Padrão HTML COM JavaScript </title> 
    <script> 
    nome1=window.prompt("Qual seu nome?"); 
    document.write("Olá, "+nome1+"!"); 
    </script> 
</head> 
 ```
 
### Exercício 3: Alterar o script do Exercício 2 para: testar leitura da janela 

 ```Javascript
<script> 
 nome1=window.prompt("Qual seu nome?"); 

 if (nome1!=null  &&  nome1!="") 
 { 
    document.write("Olá, "+nome1+"!"); 
 } 
 else 
 { 
    document.write("Olá, visitante!"); 
 } 
</script> 
  ```
 
### Exercício 4: Acrescentar um script no body do Exercício 3: função para validar leitura nos campos do FORM 

 ```Javascript
<body> 
<script> 
 function validar() 
 { 
 if (document.cadastro.nome.value == "") { 
    window.alert("Você deve preencher o campo Nome."); 
    document.cadastro.nome.focus(); 
    return false; 
  } 
 if (document.cadastro.observacoes.value == "") 
  { window.alert("Você deve colocar alguma observação..."); 
    document.cadastro.observacoes.focus(); 
    return false; 
  } 
 } 
</script> 
 ```
 
### E também acrescentar o comando de “chamar” a função validar(); no botão Enviar, conforme abaixo: 
 
 ```HTML
<INPUT TYPE="SUBMIT" VALUE="Enviar os dados"  onClick="validar();">  
 ```
  

 



### Exercício 5: (arquivo novo) Apresentar os caracteres de uma string e suas posições. 

 ```HTML
<html> 
 
<head> 
   <title> Exercício 5: apresentar os caracteres de uma string e suas posições. 
   </title> 
 
<script> 
 var frase="Ola, tudo bem?"; 
 document.write(frase+"<br>"); 
 tamanho=frase.length; 
 for (var i=0; i< tamanho;) 
 { 
    document.write("<br>Caractere na posição "+i+" : "+frase.charAt(i)); 
    i++; 
 } 
 
document.write("<br><br>Primeiro caractere: " + frase.charAt(0) + "<br />"); 
document.write("Último caractere: " + frase.charAt(frase.length-1)); 
 
/* 
O método charAt() retorna o caractere da posição especificada da string (do 
índice especificado). 
*/ 
 
</script> 
</head> 
<body> 
</body> 
</html> 
```
 
### Exercício 5.2: Mesmo exercício anterior, mas agora lendo uma frase do teclado. 

```HTML 
<html> 
<head><title> Exercício 5.2: apresentar os caracteres de uma string e suas 
posições, lendo uma frase do teclado.</title> 
<script> 
 var frase=window.prompt("digite uma frase: "); 
 document.write(frase+"<br>"); 
 tamanho=frase.length; 
 for (var i=0; i< tamanho;) 
 { 
    document.write("<br>Caractere na posição "+i+" : "+frase.charAt(i)); 
    i++; 
 } 
document.write("<br><br>Primeiro caractere: " + frase.charAt(0) + "<br />"); 
document.write("Último caractere: " + frase.charAt(frase.length-1)); 
/* 
O método charAt() retorna o caractere da posição especificada da string (do 
índice especificado). 
*/ 
</script> 
</head> 
<body> 
</body> 
</html> 
```

 



### Exercício 6: Apresentar a data em diversos formatos. 
 ```HTML
<html> 
<head> 
   <title> Exercício 6: apresentar a data em diversos formatos.</title> 
<script> 
 hoje=new Date(); 
 document.write("Data e hora completa: "+hoje); 
 document.write("<br>Apenas o dia: "+hoje.getDate()); 
 document.write("<br>Apenas o mês (0 a 11): "+hoje.getMonth()); 
 document.write("<br>Apenas o ano: "+hoje.getFullYear()); 
 document.write("<br>Apenas o dia da semana (0 a 6): "+hoje.getDay()); 
 document.write("<br>Apenas a hora e minutos: "+hoje.getHours()+":"+hoje.getMinutes()); 
 
</script> 
</head> 
 
<body> 
</body> 
</html> 
```
 
### Exercício 7: Apresenta 3 funções (botões) para trabalhar com janelas. 

```HTML 
<html> 
<head><title> Exercício 7: apresenta três funções (botões) para trabalhar com  janelas.</title> 
<script> 
 function abre1() 
 { 
    window.open("http://www.google.com"); 
 } 
 
 function abre2() 
 { 
    window.open("http://www.google.com","simples","width=350,height=400"); 
 } 
 

function abre3() 
 { 
 window.open("http://www.google.com","simples","menubar,scrollbars,width=300, height=200"); 
 } 
</script> 
</head> 
<body> 
<form> 
 Dê um clique no botão para abrir uma janela simples: 
 <input type="button" name="abrir" value="Janela1" onClick="abre1()"><br><br> 
 
 Dê um clique no botão para abrir uma janela de 350px de largura por 400px de altura, sem barras e menus: 
 <input type="button" name="abrir" value="Janela2" onClick="abre2()"><br><br> 
 
 Dê um clique no botão para abrir uma janela com menu e barra de rolagens,  mas sem barra de endereço e barra padrão: 
 <input type="button" name="abrir" value="Janela3" onClick="abre3()"><br><br> 
</form> 
</body> 
</html> 
```
 



### Exercício 8: Exibe uma caixa de mensagem na abertura do documento HTML e, depois do usuário clicar no 
### botão OK, a mesma rotina em JS imprime uma frase na página HTML. 
```HTML
<html> 
<head> 
   <title> Exercício 8: exibe uma caixa de mensagem na abertura do documento HTML 
e, depois do usuário clicar no botão OK, a mesma rotina em JS imprime uma frase  
na página HTML. 
   </title> 
<script> 
 alert("Esta caixa de dialogo foi construida em JS."); 
 document.write("Esta linha tb foi escrita em JS.<br>"); 
</script> 
</head> 
<body> 
 <br> Esta linha foi escrita em HTML. 
</body> 
</html> 
 ```
 
### Exercício 9: Apresenta o quadrado de um número já informado internamente e, em seguida, em uma caixa 
### de texto, permite que você informe um número para saber seu valor ao cubo. 

```HTML
<html> 
<head><title> Exercício 9: apresenta o quadrado de um número já informado 
internamente e, em seguida, em uma caixa de texto, permite que você informe um 
número para saber seu valor ao cubo.</title> 
 
<script> 
 function quadrado(x) 
 { 
    document.write(x*x); 
 } 
  
 function cubo(x) 
 { 
    return x*x*x 
 } 
  
 y=5; 
 document.write("O quadrado de "+ y +" é igual a "); 
 quadrado(y); 
</script> 
 
<body> 
 <form> 
  <br>Informe um número para saber seu valor ao cubo e, em seguida,  
  pressione a tecla TAB ou dê um clique fora da caixa de texto.<br> 
  <input type ="text" name="aocubo" value="" onBlur ="alert('O cubo de'+this.value+' é '+cubo(this.value))"> 
 </form> 
  
<!--O evento onblur ocorre quando um objeto perde o foco.--> 
</body> 
</html> 
 ``` 

 



### Exercício 10: Imprime o nome atual da barra de título do browser. 
 ```HTML
<html> 
 
<head> 
<title> Exercício 10: imprime o nome atual da barra de título do browser.</title> 
</head> 
 
<body> 
 
<script> 
 document.write("<br>Título da janela aberta: "+document.title+ "<br>"); 
</script> 
 
</body> 
</html> 
 ```
 
### Exercício 11: Faz uma pergunta específica e apresenta algumas respostas em forma de botões. 
 ```HTML
<html> 
 
<head> 
<title> Exercício 11: faz uma pergunta específica e apresenta algumas respostas 
em forma de botões. 
</title> 
</head> 
 
<body> 
 
<form> 
 Pergunta: Quantos anos tem um século?<br> 
 <input type="button" value="a" onclick="alert('A: Volte para 1a série!')"> 
10 anos <br> 
 <input type="button" value="b" onclick="alert('B: Correto!')"> 100 anos <br> 
 <input type="button" value="c" onclick="alert('C: MEU DEUS!!!')"> 1000 anos 
<br> 
 <input type="button" value="d" onclick="alert('D: Não dá para arriscar nada?!?!')"> Não sei <br> 
</form> 
 
</body> 
</html> 
```

 


### Exercício 12: Criar 2 funções em JS que permitam somar ou multiplicar valores informados em 3 caixas de texto. 
 ```HTML
<html> 
 
<head> 
<title> Exercício 12: cria 2 funções em JS que permitem somar ou multiplicar 
valores informados em 3 caixas de texto.</title> 
 
<script> 
   function soma() 
   { 
 x=eval(document.prova.c1.value)+eval(document.prova.c2.value)+eval(document.
prova.c3.value); 
 document.prova.c4.value=x; 
   } 
 
   function multiplica() 
   { 
 y=eval(document.prova.c1.value)*eval(document.prova.c2.value)*eval(document.
prova.c3.value); 
 document.prova.c4.value=y; 
   } 
</script> 
 
</head> 
 
<body> 
<form name="prova"> 
 Entre com os valores nos campos e dê um clique nos botões. <br><br> 
 Valor1: <input type="text" name="c1" value="" size=5 maxlength=5><br> 
 Valor2: <input type="text" name="c2" value="" size=5 maxlength=5><br> 
 Valor3: <input type="text" name="c3" value="" size=5 maxlength=5><br> 
 <br> 
 <input type="button" value="Somar" onclick="soma()"> 
 <input type="button" value="Multiplicar" onclick="multiplica()"> 
 <br><br> 
 Resposta: <input type="text" name="c4" value="" size=10 maxlength=0> 
</form> 
 
<!-- 
O eval () é uma função que avalia ou executa um argumento. Se o argumento for uma 
expressão, eval () avalia a expressão. Se o argumento for uma ou mais declarações 
JavaScript, eval () executa as instruções. 
--> 
 
</body> 
</html> 
```
  

 



### Exercício 13: Apresenta campos para preenchimento, sendo que alguns são obrigatórios. 
 ```HTML
<html> 
<head><title> Exercício 13: apresenta campos para preenchimento, sendo que alguns 
são obrigatórios.</title> 
<head> 
<script> 
 function campo_obrigatorio(x) 
 { 
  if(x.value=="") 
  { 
   alert("O campo " + x.name + " não pode ficar em branco.") 
  } 
 } 
</script> 
</head> 
<body> 

Nota: os campos marcados com asterisco são obrigatórios. <br><br> 
<form> 
 *Nome Completo: <input type="text" name="nome" value="" size=30 maxlength=30 
onblur="campo_obrigatorio(this)"><br> 
 Idade: <input type="text" name="idade" value="" size=5 maxlength=5><br> 
 *Cidade: <input type="text" name="cidade" value="" size=20 maxlength=20 
onblur="campo_obrigatorio(this)"><br> 
 Telefone: <input type="text" name="telefone" value="" size="15"  maxlength="15"<br> 
</form> 
</body> 
</html> 
 ```
 
### Exercício 14: Trocar figura passando o mouse. 
 ```HTML
<html> 
<head><title> Exercício 14: trocar figura clicando o mouse.</title> 
<script language="JavaScript"> 
function mouseEmCima(imagem){ 
    imagem.src="figura1.png"; 
} 
function mouseFora(imagem) { 
    imagem.src="figura2.png"; 

} 
</script> 
</head> 
<body> 
Clique na imagem: <br><br> 
<img src="figura2.png"  onclick="mouseEmCima(this)" width="300" height="300" >  
<br><br> 
1) Agora padronize os tamanhos das imagens. <br><br> 

2) Mude o evento para que as imagens sejam trocadas ao "clicar" com o mouse. 
 
<!-- 
width="300" height="300" : dentro da tag img src onclick="mouseEmCima(this)" 
onMouseOver="mouseEmCima(this)" 
--> 
</body> 
</html>  
```
 



### Exercício 15: Saudações ao usuário. 
 ```HTML
<html> 
<head> 
<title> Exercício 15: saudações ao usuário.</title> 
</head> 
<body> 
 
<script language="JavaScript"> 
var dia = new Date(); 
var hora = dia.getHours(); 
var minuto = dia.getMinutes(); 
if ((hora==1)||(hora==2)||(hora==3)||(hora==4) || (hora==5)) 
document.write( "Você não devia estar dormindo?"); 
if ((hora==6) || (hora==7) || (hora==8) || (hora==9) || (hora==10)|| (hora==11)) 
document.write( "Bom dia!"); 
if (hora==12) document.write( "Vamos almoçar?"); 
if ((hora==13) || (hora==14) || (hora==15) || (hora==16) || (hora==17)) 
document.write( "Boa Tarde!"); 
if ((hora==18) || (hora==19)) document.write( "Bom final de tarde!"); 
if ((hora==20) || (hora==21) || (hora==22)) document.write( "Boa noite!"); 
if (hora==23) document.write( "Ó Meu! Já é quase meia-noite!"); 
if (hora==0) document.write( "Meia-noite! Já é amanhã!"); 
</script> 
 
<br><br> 
<!-- 
Agora você deve acrescentar os seguintes testes:<br><br> 
 
1) Mensagem "Vamos para aula!" quando for 19:30 <br> 
2) Mensagem "Hora do RECREIO!" quando for 20:50 <br> 
3) Mensagem "Vamos embora, a aula terminou!" quando for 22:30 <br> 
--> 
</body> 
</html> 
 ```

### Exercício 16: Usando como base o exercicio Anterior Melhores o codigo Javascript. 
### Para que o mesmo seja mais facil de entender sua logica de Negocio



### Exercício 17: Saudações ao usuário com figuras. 
```HTML 
<html> 
<head><title> Exercício 16: saudações ao usuário com figuras.</title></head> 
 
<body> 
<script language="JavaScript"> 
 
dia = new Date() 
hora = dia.getHours() 
 
if (hora < 18) { 
 document.write('<img src= "figura1.png ">'); 
} 
else { 
 document.write('<img src= "figura2.png ">'); 
} 
</script> 
 
<br><br> blablabla <br><br> 
 
</body> 
</html> 
```




### Exercício 18: Mudar figuras com o passar do Mouse(onMouseOver, onMouseOut). 

 ```HTML
<html> 
<head><title> Exercício 18: trocar figura passando o mouse.</title> 
<script language="JavaScript"> 
function mouseEmCima(imagem){ 
    imagem.src="figura1.png"; 
} 
function mouseFora(imagem) { 
    imagem.src="figura2.png"; 

} 
</script> 
</head> 
<body> 
Clique na imagem: <br><br> 
<img src="figura2.png"  onMouseOver="mouseEmCima(this)" 
                        onMouseOut="mouseFora(this)" width="300" height="300" >  
<br><br> 
1) Agora padronize os tamanhos das imagens. <br><br> 

2) Mude o evento para que as imagens sejam trocadas ao "clicar" com o mouse. 
 
<!-- 
width="300" height="300" : dentro da tag img src onclick="mouseEmCima(this)" 
onMouseOver="mouseEmCima(this)" 
--> 
</body> 
</html>  
```
