// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return Number(lado1) + Number(lado2) + Number(base);
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cm2");

console.groupEnd();

console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

// 

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    document.getElementById("result").innerHTML = perimetro;
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    document.getElementById("result").innerHTML = perimetro;
}


function calcularPerimetroTriangulo(){
  const lado1 = document.getElementById("InputTriangulo");
  const lado2 = document.getElementById("InputTriangulo1");
  const base = document.getElementById("InputTrianguloBase");
  const result = lado1.value + lado2.value + base.value;

  const perimetro = perimetroTriangulo(result);
  document.getElementById("resultTriangulo").innerHTML = perimetro;
}

function calcularAreaTriangulo(){
  const input = document.getElementById("InputTriangulo");
  const value = input.value;

  const perimetro = areaTriangulo(value);
  document.getElementById("resultTriangulo").innerHTML = perimetro;

}


function calcularPerimetroCiculo(){
  const input = document.getElementById('InputCirculo');
  const value = input.value;
  
  const perimetro = perimetroCirculo(value);
  document.getElementById("resultCirculo").innerHTML = perimetro;
}
function calcularAreaCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = areaCirculo(value);
  document.getElementById("resultCirculo").innerHTML = perimetro;
}