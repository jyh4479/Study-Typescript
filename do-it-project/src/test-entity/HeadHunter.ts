import {Job} from "./Job";

export class HeadHunter implements Job {
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    work() {
        console.log(`I'm HeadHunter ${this.name}`);
    }
}