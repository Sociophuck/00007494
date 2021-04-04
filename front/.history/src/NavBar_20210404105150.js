import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function NavBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            BrandLogo
          </Typography>
          <div>
            <Link to="/authors">Authors</Link>
            <Link to="/books">Books</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
