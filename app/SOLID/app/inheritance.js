"use strict";
class Football {
    constructor(name, team_region) {
        this.name = name,
            this.team_region = team_region;
    }
    getNumberOfGoals() {
        return Math.floor((3 * 0.6) + 2);
    }
    getNumberOfAssists() {
        return Math.floor((7.0 * 0.0007) + 10);
    }
    getDataReport() {
        return `${this.name} scored ${this.getNumberOfGoals()} goals and provided ${this.getNumberOfAssists()} assists in the ${this.team_region} in the 2028/2029 season`;
    }
}
class Striker extends Football {
    constructor(name, team_region) {
        super(name, team_region);
    }
}
class Uvique extends Football {
    constructor(jersey_number, name, team_region) {
        super(name, team_region);
        this.jersey_number = jersey_number,
            this.name = name,
            this.team_region = team_region;
    }
    getDataReport() {
        return `He also wears the number ${this.jersey_number} jersey for his country ${this.name}`;
    }
}
const striker = new Striker("Paul Pogba", "English Premier League");
console.log(striker.getDataReport());
const player = new Uvique(6, "France", "English Premier League");
console.log(player.getDataReport());
