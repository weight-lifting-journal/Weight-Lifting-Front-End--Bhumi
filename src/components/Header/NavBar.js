import React, { Fragment } from "react";
import { Route } from "react-router-dom";
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
import WorkoutsForm from "../Forms/WorkoutsForm";
import ExerciseForm from "../Forms/ExerciseForm";

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

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

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

            <Fab
              color="secondary"
              aria-label="Add"
              className={classes.fabButton}
              onClick={this.handleClickOpen}
            >
              <AddIcon />
            </Fab>
            <Route
              exact
              path="/workouts"
              render={routeProps => (
                <WorkoutsForm
                  {...routeProps}
                  open={this.state.open}
                  onClose={this.handleClose}
                />
              )}
            />
            <Route
              exact
              path="/workout/:id"
              render={routeProps => (
                <ExerciseForm
                  {...routeProps}
                  open={this.state.open}
                  onClose={this.handleClose}
                />
              )}
            />
            <div>
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
}

export default withStyles(styles)(NavBar);
