import {Job} from "./Job";
import {Food} from "./Food";

export class Developer implements Job, Food {
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    work() {
        console.log(`I'm Developer ${this.name}`);
    }

    eatFood() {
        console.log("Eat Food");
    }

    makeFood() {
        console.log("Make Food");
    }
}