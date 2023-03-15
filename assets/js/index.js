'use strict'

const createBtn = document.querySelector('.create-button');
const shapeName = document.querySelector('.shape-select');
const colorName = document.querySelector('.color-select');
const bigCenter = document.querySelector('.big-center');
const unit = document.querySelector('.Unit');
const result = document.querySelector('.result');

let n = 0;
const shapeArray = [];

createBtn.addEventListener('click', funcclick);

function funcclick() {
    const shape = new Shape(shapeName.value,colorName.value,n);
    
    // I don't know why it is required to create an array and save the object 
    // in the array. I haven't used this array after here.
    shapeArray.push(shape);
    shape.createShape();
    n++;
    if(n === 20) {
        createBtn.removeEventListener('click', funcclick)
    }
}

class Shape {
    #name;
    #color;
    numIndex;

    constructor(name,color,numIndex) {
        this.#name = name;
        this.#color = color;
        this.numIndex = numIndex;
    }

    set setname(name) {
        this.#name = name;
    }

    set setcolor(color) {
        this.#color = color;
    }

    get getname() {
        return this.#name
    }

    get getcolor() {
        return this.#color
    }

    getInfo() {
        let unitColor = '';
        if(this.#color === '#09F') {
            unitColor = 'blue';
        }
        if(this.#color === '#9f0') {
            unitColor = 'green';
        }
        if(this.#color === '#f90') {
            unitColor = 'orange';
        }
        if(this.#color === '#f09') {
            unitColor = 'pink';
        }
        if(this.#color === '#90f') {
            unitColor = 'purple';
        }
        return `Unit ${this.numIndex + 1}: ${unitColor} ${this.#name}`
    }

    createShape() {
        const shapeDiv = document.createElement("div");
        shapeDiv.className = "Unit";
        shapeDiv.style.backgroundColor = this.#color;
        
        if (n<5) {
            shapeDiv.style.gridRowStart = '4';
        }
        if (n>4 && n<10) {
            shapeDiv.style.gridRowStart = '3';
        }
        if (n>9 && n<15) {
            shapeDiv.style.gridRowStart = '2';
        }
        if (n>14 && n<19) {
            shapeDiv.style.gridRowStart = '1';
        }
        
        if(this.#name === 'circle') {
            shapeDiv.style.borderRadius = "50%";
        }
        bigCenter.appendChild(shapeDiv);

        // I can only call the getInfo method here, because shapeDiv is created 
        // dynamically. If it is called outside, it will show that there is no 
        // dom object.
        shapeDiv.addEventListener('click', () => {
            result.innerHTML = this.getInfo();
        });
    }
}
