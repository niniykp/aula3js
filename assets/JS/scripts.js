// const paragrafo = document.createElement("p");
// const div1 = document.getElementById("ex1")
// paragrafo.textContent = "Elemento criado dinamicamente com JavaScript."

// div1.appendChild(paragrafo);

// Exercício 2

// const p1 = document.createElement("p")
// const p2 = document.createElement("p")
// const p3 = document.createElement("p")
// const div2 = document.getElementById("ex2")

// p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
// p2.textContent = "Duis suscipit lacus quam, nec convallis ex condimentum consectetur."
// p3.textContent = "Duis eget eros rutrum, mattis dolor iaculis, tincidunt odio."

// div2.append(p1 , p2 , p3)

// // Exercicio 3

// const lista = document.createElement("ul")
// let divExercicio3 = document.getElementById("ex3")
// divExercicio3.appendChild(lista)
// let listItem1 = document.createElement("li")
// let listItem2 = document.createElement("li")
// let listItem3 = document.createElement("li")

// lista.append(listItem1, listItem2, listItem3)

// listItem1.textContent = "lorem ipsum"
// listItem2.textContent = "lorem ipsum"
// listItem3.textContent = "lorem ipsum"

// // Exercício 4

// listItem1.textContent = "banana"
// listItem2.textContent = "maçã"
// listItem3.textContent = "uva"

// let listItem4 = document.createElement("li")
// let listItem5 = document.createElement("li")

// listItem4.textContent = "morango"
// listItem5.textContent = "abacaxi"

// lista.append(listItem4, listItem5)

// Exercício 5

// let divExercicio5 = document.getElementById("ex5")
// let paragrafosDiv5 = divExercicio5.querySelectorAll("p")

// paragrafosDiv5[1].remove()

// Exercicio 6 

// let divExercicio6 = document.getElementById("ex6")

// let paragrafo1 = document.createElement("p")
// let paragrafo2 = document.createElement("p")
// let paragrafo3 = document.createElement("p")

// divExercicio6.append(paragrafo1, paragrafo2, paragrafo3)

// paragrafo1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
// paragrafo2.textContent = "Duis suscipit lacus quam, nec convallis ex condimentum consectetur."
// paragrafo3.textContent = "Duis eget eros rutrum, mattis dolor iaculis, tincidunt odio."

// paragrafo1.remove()

// Exercício 7

// const listaEx7 = document.getElementById("lista2")
// const ultimoFilho = listaEx7.lastElementChild
 
// listaEx7.removeChild(ultimoFilho)

// Exercício 8

// const div8 = document.getElementById("ex8")
// let elementoA = document.createElement("p")
// elementoA.textContent = "Duis eget eros rutrum, mattis dolor iaculis, tincidunt odio."

// let elementoB = document.createElement("p")
// elementoB.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

// let elementoC = document.createElement("p")
// elementoC.textContent = "Duis suscipit lacus quam, nec convallis ex condimentum consectetur"

// div8.append(elementoA, elementoB, elementoC)

// let paragrafos = div8.querySelectorAll("p")
// paragrafos[1].remove()

//Exercicio 9 

// const container = document.getElementById("ex9")
// const cores = ["red", "blue", "green", "purple", "orange"];

// for(let i = 0; i < cores.length; i++){
//     const bloco = document.createElement("div")
//     bloco.className = "bloco"
//     bloco.style.backgroundColor = cores[i]
//     bloco.textContent = "Bloco" + (i + 1)
//     container.appendChild(bloco)
// }

// while(container.firstChild){
//     container.removeChild(container.firstChild)
// }

// Exercício 10

// const div10 = document.getElementById("ex10")
// const titulo10 = document.createElement("h2")
// titulo10.textContent = "ABCDE"
// const texto10 = document.createElement("p")
// texto10.textContent = "123456789"

// div10.append(titulo10, texto10)

// div10.removeChild(titulo10)