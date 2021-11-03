
    'use strict'
    
    const valueResult = document.getElementById('result');
    // Area y perimetro del cuadrado

    
    const perimSquare = (side) => side * 4;
    const areaSquare = (side) => side * side;

    function calculatePerimSquare(){
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);

        const result = `El perimetro del Cuadrado es: ${perimSquare(value)} cm`
        valueResult.innerText = result;
    }

    function calculateAreaSquare(){
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);

        const result = `El area del Cuadrado es: ${areaSquare(value)} cm°2`
        valueResult.innerText = result;
    }

//area y perimetro de triangulo

const perimTriangle = (side1, side2, base) => side1 + side2 + base;
const areaTriangle = (base, height) => (base * height) / 2;

function calculatePerimTriamgle(){
    let side1 = document.getElementById('inputside1');
    let side2 = document.getElementById('inputside2');
    let side3 = document.getElementById('inputside3');
    side1 = Number(side1.value);
    side2 = Number(side2.value);
    side3 = Number(side3.value);

    const result = `El perimetro del Triangulo es: ${perimTriangle(side1, side2, base)} cm`
    valueResult.innerText = result
}

function calculateAreaTriangle(){
    let base = document.getElementById('inputBase');
    let height = document.getElementById('inputHeight');
    base = Number(base.value);
    height = Number(height.value);

    const result = `El Area de tu tringulo es: ${areaTriangle(base, height)}`;
    valueResult.innerText=result;

}




//area, perimetro y diametro de circulo

const  diamCircle = (radio)=>radio*2;
const  perimCircle = (radio)=> diameCircle(radio) * Math.PI;
const  areaCircle = (radio)=> (radio * radio) * Math.PI;

function calculateDiamCircle(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);

    const result = `El Diametro del Circulo es: ${diamCircle(radio)} cm`;
    valueResult.innerText=result;
}

function calculatePerimCicle(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);

    const result = `El Perimetro del Circulo es: ${perimCircle(radio)} cm`;
    valueResult.innerText=result;
}

function calculateAreaCircle(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    
    const result = `El Area del Circulo es: ${areaCircle(radio)} cm°2`;
    valueResult.innerText=result;
    
}
