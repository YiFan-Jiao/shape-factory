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
        return `${this.numIndex + 1}: ${this.#color} ${this.#name}`
    }

    createShape() {
        const shapeDiv = document.createElement("div");
        shapeDiv.className = "Unit";
        shapeDiv.style.backgroundColor = this.#color;
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
