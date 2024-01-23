//titulo simples com id "titulo" - Elemento Simples

//primeira etapa - criar um elemento HTML

let titulo = document.createElement("h1");

//segunda etapa - popular e manipular esse elemento HTML

titulo.innerText = "Titulo Simples";
titulo.id = "titulo"

//terceira etapa - adicionar o elemento HTML no DOM

let tituloFinal = document.querySelector("body");
tituloFinal.appendChild(titulo);


//elemento que representa um produto à venda, produto com nome descrição, preço e elementos filhos como uma imagem - Elemento Complexo

//primeira etapa - criar um elemento HTML

const produto = document.createElement ("div");

//segunda etapa - popular e manipular esse elemento HTML

produto.innerHTML = 
`
<h2>Iphone 13 - 126gb</h2>
<p>iPhone 13. O sistema de câmera dupla mais avançado em um iPhone. Chip A15 Bionic com velocidade impressionante. 
    Um grande salto em bateria. Projetado para durar. E tela Super Retina XDR mais brilhante.</p>
<p>R$3899 no pix</p>
<smal>ou R$ 4.332,22 em 10x de R$ 433,22 sem juros</smal>
<div></div>
<img src="https://m.media-amazon.com/images/I/41C+DE11CRL._AC_UF1000,1000_QL80_.jpg"/>
`
//terceira etapa - adicionar o elemento HTML no DOM

const produtoFinal = document.querySelector("body");
produtoFinal.appendChild(produto);