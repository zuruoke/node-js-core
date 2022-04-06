interface Country {
    jersey_number: number;
    name: string;
    getDataReport(jersey_number: number, name: string): string

    // public getDataReport() {
    //     return `He also wears the number ${this.jersey_number} jersey for his country ${this.name}`
    // }
}

class Football {
    name: string;
    team_region: string
    constructor(name: string, team_region: string) {
        this.name = name,
            this.team_region = team_region
    }

    private getNumberOfGoals() {
        return Math.floor((3 * 0.6) + 2)
    }

    private getNumberOfAssists() {
        return Math.floor((7.0 * 0.0007) + 10)
    }

    public getDataReport() {
        return `${this.name} scored ${this.getNumberOfGoals()} goals and provided ${this.getNumberOfAssists()} assists in the ${this.team_region} in the 2028/2029 season`
    }
}

class Striker extends Football {
    constructor(name: string, team_region: string) {
        super(name, team_region);
    }
}

class Uvique extends Football implements Country {
    jersey_number: number;
    name: string;
    team_region: string;
    constructor(jersey_number: number, name: string, team_region: string) {
        super(name, team_region)
        this.jersey_number = jersey_number,
            this.name = name,
            this.team_region = team_region
    }

    public getDataReport(): string {
        return `He also wears the number ${this.jersey_number} jersey for his country ${this.name}`
    }

}

const striker = new Striker("Paul Pogba", "English Premier League")
console.log(striker.getDataReport())
const player = new Uvique(6, "France", "English Premier League")
console.log(player.getDataReport())