"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = exports.ElephantClass = exports.DogClass = void 0;
class DogClass {
    constructor(name, breed) {
        this.breed = breed,
            this.name = name;
    }
    canBark() {
        throw new Error("Method not implemented.");
    }
    isDomestic() {
        throw new Error("Method not implemented.");
    }
}
exports.DogClass = DogClass;
class ElephantClass {
    constructor(distance, weight) {
        this.distance = distance;
        this.weight = weight;
    }
    getCurrentAge(location, weight) {
        throw new Error("Method not implemented.");
    }
}
exports.ElephantClass = ElephantClass;
class Animal {
    constructor(distance, weight, name, breed) {
        this.distance = distance,
            this.weight = weight,
            this.breed = breed,
            this.name = name;
    }
    getCurrentAge(location, weight) {
        throw new Error("Method not implemented.");
    }
    canBark() {
        throw new Error("Method not implemented.");
    }
    isDomestic() {
        throw new Error("Method not implemented.");
    }
}
exports.Animal = Animal;
