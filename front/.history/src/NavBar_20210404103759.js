import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/books">Books</Link>
      <Link to="/books">Authors</Link>
    </div>
  );
}

export default NavBar;
