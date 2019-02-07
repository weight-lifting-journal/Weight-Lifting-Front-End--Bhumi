import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 20px;
`;
const H1 = styled.h1`
  font-size: 50px;
  margin-left: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  },
  pushRight: {
    marginLeft: 10
  }
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      errorMessage: null
    };
  }

  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint =
      "https://weightliftingjournallambda.herokuapp.com/users/register";

    axios
      .post(endpoint, {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/workouts");
      })
      .catch(err => {
        this.setState({ errorMessage: err.response.data.message });
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Header>
          <img
            src="https://img.icons8.com/ios/50/000000/weightlift-filled.png"
            alt="Weight Lifting"
          />
          <H1>FitMe </H1>
        </Header>

        <span> Sign up now to track and organize your workouts. </span>

        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <form onSubmit={this.handleSubmit} className={classes.form}>
            {this.state.errorMessage && (
              <ErrorMessage>ERROR: {this.state.errorMessage}</ErrorMessage>
            )}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChanges}
                autoComplete="email"
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Username</InputLabel>
              <Input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChanges}
                autoComplete="username"
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                value={this.state.password}
                onChange={this.handleChanges}
                type="password"
                autoComplete="current-password"
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>

            <div>
              <p>
                Already have an account?
                <span className={classes.pushRight}>
                  <Link to="/sign-in">Sign In</Link>
                </span>
              </p>
            </div>
          </form>
        </Paper>
      </main>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
