import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "",
  },
  logo: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography className={classes.logo} variant="h6">
            <Link to="/" className="link">
              BrandLogo
            </Link>
          </Typography>

          <div className="header-links">
            <Link to="/authors">
              <Typography variant="h6" color="inherit">
                Authors
              </Typography>
            </Link>
            <Link to="/authors/create">
              <Typography variant="h6" color="inherit">
                Add author
              </Typography>
            </Link>
            <Link to="/books">
              <Typography variant="h6" color="inherit">
                Books
              </Typography>
            </Link>
            <Link to="/books/create">
              <Typography variant="h6" color="inherit">
                Add book
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
