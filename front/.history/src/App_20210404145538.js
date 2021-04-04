import Author from "./Author";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "./Book";
import Home from "./Home";
import NavBar from "./NavBar";
import AuthorDetails from "./AuthorDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="mainBody">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/authors">
              <Author />
            </Route>
            <Route path="/authors/:id">
              <AuthorDetails />
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
