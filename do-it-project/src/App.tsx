import {useEffect} from 'react'
import './App.css'
import {HeadHunter} from "./test-entity/HeadHunter";
import {Developer} from "./test-entity/Developer";
import {Team} from "./test-entity/Team";

function App() {

    useEffect(() => {
        const job1 = new HeadHunter("김동찬");
        const job2 = new HeadHunter("김영진");
        const job3 = new Developer("이우영");
        const job4 = new Developer("정용훈");

        const myList = [job1, job2, job3, job4];

        const donboTeam = new Team(myList);

        donboTeam.checkTeam();
    }, [])

    return (
        <div className="App">
            Team Test!
        </div>
    )
}

export default App
