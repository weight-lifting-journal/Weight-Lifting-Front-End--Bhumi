import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import toRenderProps from "recompose/toRenderProps";
import IconButton from "@material-ui/core/IconButton";
import withState from "recompose/withState";

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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

export default MenuDropdown;
