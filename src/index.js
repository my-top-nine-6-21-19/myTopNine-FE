import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#212121"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#fafafa",
      main: "#f5f5f5"
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    }
    // error: will use the default color
  }
});

console.log(theme);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
