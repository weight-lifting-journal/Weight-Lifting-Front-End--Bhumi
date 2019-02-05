import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";
import { Link } from "react-router-dom";

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
    marginTop: theme.spacing.unit * 3
  }
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
      "https://weightliftingjournallambda.herokuapp.com/users/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/home");
      })
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <div className="header">
          <img
            src="https://img.icons8.com/office/50/000000/book.png"
            alt="Journal Icon"
          />
          <h1>Fit Me </h1>
        </div>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form onSubmit={this.handleSubmit} className={classes.form}>
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
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                value={this.state.password}
                onChange={this.handleChanges}
                type="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
            <div>
              <p>
                Don't have an account?
                <span>
                  <Link to="/sign-up">Sign Up</Link>
                </span>
              </p>
            </div>
          </form>
        </Paper>
      </main>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);