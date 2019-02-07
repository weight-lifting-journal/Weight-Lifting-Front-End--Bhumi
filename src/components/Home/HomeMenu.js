import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import toRenderProps from "recompose/toRenderProps";
import IconButton from "@material-ui/core/IconButton";
import withState from "recompose/withState";
import { Link } from "react-router-dom";

const WithState = toRenderProps(withState("anchorEl", "updateAnchorEl", null));

function MenuDropdown() {
  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };

        return (
          <React.Fragment>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              aria-owns={open ? "render-props-menu" : undefined}
              aria-haspopup="true"
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="render-props-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={handleClose}
                component={props => <Link to="/sign-in" {...props} />}
              >
                <img
                  src="https://img.icons8.com/ios/16/000000/password.png"
                  alt="Login Icon"
                />
                <div> Sign In </div>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={props => <Link to="/sign-up" {...props} />}
              >
                <img
                  src="https://img.icons8.com/ios/20/000000/add-user-male.png"
                  alt="Sign-up Icon"
                />
                <div>Sign Up</div>
              </MenuItem>
            </Menu>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

export default MenuDropdown;
