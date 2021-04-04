import Author from "./Author";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "./Book";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/authors">
              <Author />
            </Route>
            <Route path="/books">
              <Book />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
