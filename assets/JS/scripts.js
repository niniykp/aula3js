// const paragrafo = document.createElement("p");
// const div1 = document.getElementById("ex1")
// paragrafo.textContent = "Elemento criado dinamicamente com JavaScript."

// div1.appendChild(paragrafo);

// Exercício 2

const p1 = document.createElement("p")
const p2 = document.createElement("p")
const p3 = document.createElement("p")
const div2 = document.getElementById("ex2")

p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
p2.textContent = "Duis suscipit lacus quam, nec convallis ex condimentum consectetur."
p3.textContent = "Duis eget eros rutrum, mattis dolor iaculis, tincidunt odio."

div2.append(p1 , p2 , p3)
