import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link href="/books">Books</Link>
      <Link href="/books">Authors</Link>
    </div>
  );
}

export default NavBar;
