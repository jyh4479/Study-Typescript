import {Job} from "./Job";

export class Team {
    teamList: Array<Job>;

    constructor(teamList: Array<Job>) {
        this.teamList = teamList;
    }

    checkTeam() {
        this.teamList.forEach(job => {
            job.work();
        })
    }
}