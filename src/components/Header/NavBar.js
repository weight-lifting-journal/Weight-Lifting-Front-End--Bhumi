import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// import SearchIcon from "@material-ui/icons/Search";
import MenuDropdown from "./MenuDropdown";
import styled from "styled-components";
import { Link } from "react-router-dom";

const H1 = styled.h1`
  font-size: 30px;
  margin-left: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing.unit * 2
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: 0,
    bottom: "auto"
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    bottom: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
});

function NavBar(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Header>
            <Link to="/workouts">
              <img
                src="https://img.icons8.com/ios/50/000000/weightlift-filled.png"
                atl="Weight Lifting Image"
              />
            </Link>
            <H1>FitMe </H1>
          </Header>

          <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div>
            <IconButton color="inherit">{/* <SearchIcon /> */}</IconButton>
            <IconButton color="inherit">
              <MenuDropdown />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ paddingBottom: 120 }} />
    </React.Fragment>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
