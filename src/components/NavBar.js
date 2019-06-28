import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Home, Book, AccountBox } from "@material-ui/icons";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.node.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  window: PropTypes.func
};

function NavBar(props) {
  return (
    <div>
      <ElevationScroll {...props}>
        <AppBar color="primary" position="fixed">
          <Toolbar>
            <List component="nav">
              <ListItem component="div">
                <ListItemText inset>
                  <Button
                    component={Link}
                    to="/"
                    color="inherit"
                    variant="title"
                  >
                    My Top Nine <Home />
                  </Button>
                </ListItemText>

                <ListItemText inset>
                  <Button
                    component={Link}
                    to="/add-friend"
                    color="inherit"
                    variant="title"
                  >
                    Add New Friend <Book />
                  </Button>
                </ListItemText>

                <ListItemText inset>
                  <Button
                    component={Link}
                    to="/login"
                    color="inherit"
                    variant="title"
                  >
                    Log In <AccountBox />
                  </Button>
                </ListItemText>
                <ListItemText inset>
                  <Button
                    onClick={props.logout}
                    color="inherit"
                    variant="title"
                  >
                    Log Out
                  </Button>
                </ListItemText>
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

export default NavBar;
