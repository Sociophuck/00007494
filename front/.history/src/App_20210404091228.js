import Author from "./Author";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Author />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
