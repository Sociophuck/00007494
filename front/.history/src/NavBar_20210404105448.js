import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
  },
  //   menuButton: {
  //     marginRight: theme.spacing(2),
  //   },
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
            <Link to="/authors">Authors</Link>
            <Link to="/books">Books</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
