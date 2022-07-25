import {Job} from "./Job";

export class Developer implements Job {
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    work() {
        console.log(`I'm Developer ${this.name}`);
    }
}