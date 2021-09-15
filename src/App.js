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
import ToolGunny2017 from "./component/toolGunny2017/index";
function App() {
    return (
        <div className="App">
            <Router basename="/">
                <div>
                    <a href="/dau-la-dai-luc">Đấu la đại lục</a>
                    <a href="/tool-gunny2017">Tool Gunny 2017</a>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/dau-la-dai-luc" component={DauLa} />
                        <Route
                            exact
                            path="/dau-la-dai-luc-id"
                            component={DauLaID}
                        />
                        <Route
                            exact
                            path="/tool-gunny2017"
                            component={ToolGunny2017}
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
