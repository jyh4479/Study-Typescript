import React from 'react';
import GNB from "./components/GNB";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {HomePage, MountainPage, SeaPage} from "./pages";

function App() {
    return (
        <Router>
            <div className="App">
                <GNB></GNB>
                <Route path="/" exact={true} component={HomePage}></Route>
                <Route path="/mountain" component={MountainPage}></Route>
                <Route path="/sea" component={SeaPage}></Route>
            </div>
        </Router>
    );
}

export default App
