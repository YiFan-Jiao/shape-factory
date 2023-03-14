'use strict'

const createBtn = document.querySelector('.create-button');
const shapeName = document.querySelector('.shape-select');
const colorName = document.querySelector('.color-select');
const bigCenter = document.querySelector('.big-center');

const shapeArray = [];

createBtn.addEventListener('click', () => {
    const shape = new Shape(shapeName.value,colorName.value);
    shapeArray.push(shape);
    shape.createShape();
});



class Shape {
    #name;
    #color;

    constructor(name,color) {
        this.#name = name;
        this.#color = color;
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

    getInfo(divname) {
        return `${divname}: ${this.#color} ${this.#name}`
    }

    createShape() {
        const shapeDiv = document.createElement("div");
        shapeDiv.className = "Unit";
        shapeDiv.style.backgroundColor = this.#color;
        if(this.#name === 'circle') {
            shapeDiv.style.borderRadius = "50%";
        }
        bigCenter.appendChild(shapeDiv);
    }
}
