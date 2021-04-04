import Author from "./Author";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "./Book";
import Home from "./Home";
import NavBar from "./NavBar";
import AuthorDetails from "./AuthorDetails";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/authors">
              <Author />
            </Route>
            <Route path="/authors/:id">
              <AuthorDetails />
            </Route>
            <Route path="/books">
              <Book />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
