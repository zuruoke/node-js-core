export interface DogInterface {
    name: string;
    breed: string;
    canBark(): boolean;
    isDomestic(): boolean
}

export interface ElephantInterface {
    distance: number;
    weight: number;
    getCurrentAge(location: string, weight: number): number
}


export class DogClass implements DogInterface {

    name: string;
    breed: string;

    constructor(name: string, breed: string) {
        this.breed = breed,
            this.name = name
    }

    canBark(): boolean {
        throw new Error("Method not implemented.");
    }
    isDomestic(): boolean {
        throw new Error("Method not implemented.");
    }
}

export class ElephantClass implements ElephantInterface {
    distance: number;
    weight: number;
    constructor(distance: number, weight: number) {
        this.distance = distance
        this.weight = weight
    }
    getCurrentAge(location: string, weight: number): number {
        throw new Error("Method not implemented.");
    }

}

export class Animal implements ElephantClass, DogClass {
    name: string;
    breed: string;
    distance: number;
    weight: number;
    constructor(distance: number, weight: number, name: string, breed: string) {
        this.distance = distance,
            this.weight = weight,
            this.breed = breed,
            this.name = name
    }

    getCurrentAge(location: string, weight: number): number {
        throw new Error("Method not implemented.");
    }

    canBark(): boolean {
        throw new Error("Method not implemented.");
    }
    isDomestic(): boolean {
        throw new Error("Method not implemented.");
    }

}