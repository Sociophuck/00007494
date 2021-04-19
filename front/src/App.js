import Author from "./Author";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "./Book";
import Home from "./Home";
import NavBar from "./NavBar";
import AuthorDetails from "./AuthorDetails";
import AuthorCreate from "./AuthorCreate";
import AuthorEdit from "./AuthorEdit";
import BookCreate from "./BookCreate";
import BookDetails from "./BookDetails";
import BookEdit from "./BookEdit";

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
            <Route exact path="/authors">
              <Author />
            </Route>
            <Route exact path="/authors/create">
              <AuthorCreate />
            </Route>
            <Route path="/authors/:id">
              <AuthorDetails />
            </Route>
            <Route path="/author/:id/edit">
              <AuthorEdit />
            </Route>

            <Route exact path="/books">
              <Book />
            </Route>
            <Route exact path="/books/create">
              <BookCreate />
            </Route>
            <Route path="/books/:id">
              <BookDetails />
            </Route>
            <Route path="/book/:id/edit">
              <BookEdit />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
