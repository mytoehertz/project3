import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";
import Scroller from "./components/routing/Scroller";
import { ProductProvider } from "../src/utils/context";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <ProductProvider>
        <Router>
          <Fragment>
            <Navbar />
            <Scroller>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route component={Routes} />
              </Switch>
            </Scroller>
            <Footer />
          </Fragment>
        </Router>
      </ProductProvider>
    </Provider>
  );
};

export default App;
