import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/authors">Authors</Link>
      <Link to="/books">Books</Link>
    </div>
  );
}

export default NavBar;
