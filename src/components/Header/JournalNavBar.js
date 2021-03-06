import React from "react";
import { Route, withRouter, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import WorkoutsForm from "../Forms/WorkoutsForm";
import ExerciseForm from "../Forms/ExerciseForm";
import logo from "../img/logo.png";

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 130px;
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
    bottom: "auto",
    backgroundColor: "#47508F"
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    bottom: -18,
    left: 0,
    right: 0,
    margin: "0 auto",
    backgroundColor: "#2e3141"
  }
});

class JournalNavBar extends React.Component {
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
            <Link to="/workouts">
              <Header>
                <Img src={logo} alt="FitMe Logo" />
              </Header>
            </Link>

            <Fab
              color="secondary"
              aria-label="Add"
              size="small"
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
              <IconButton
                color="inherit"
                onClick={() => {
                  console.log(this.props);
                  localStorage.removeItem("jwt");
                  this.props.history.push("/");
                }}
              >
                <i className="material-icons">exit_to_app</i>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <div style={{ paddingBottom: 130 }} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(JournalNavBar));
