import "./App.css";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import Home from "./component/home/Home";
import DauLa from "./component/daula/DauLa";
import DauLaID from "./component/daula/DauLaId";
function App() {
    return (
        <div className="App">
            <Router basename="/">
                <div>
                    <a href="/dau-la-dai-luc">Đấu la đại lục</a>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/dau-la-dai-luc" component={DauLa} />
                        <Route
                            exact
                            path="/dau-la-dai-luc-id"
                            component={DauLaID}
                        />
                        <Route exact path="/" component={Home} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
