import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
          <Typography className={classes.logo} variant="h6" color="inherit">
            BrandLogo
          </Typography>
          <div>
            <Link to="/authors">
              <Typography variant="body1">Authors</Typography>
            </Link>
            <Link to="/books">Books</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
