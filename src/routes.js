import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import App from "./App";

import authorizationUtils from "./utils/authorizationUtils";

/** Import containers here */
import APIStatus from "./containers/users/APIStatus";
import ErrorComponent from "./containers/errors/ErrorComponent";
import PublicComponent from "./containers/guests/PublicComponent";
import AccountSwitcher from "./containers/accounts/AccountSwitcher";
import ContentBrowser from "./containers/content/ContentBrowser";

const routes = state => {
  /* https://tylermcginnis.com/react-router-protected-routes-authentication/ */
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authorizationUtils.isLoggedIn(state) === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }/>
  );

  return (
    <App>
      <Switch>
        {/* PrivateRoutes */}
        <PrivateRoute
          exact
          path="/status"
          component={APIStatus}
        />
        {/* PublicRoutes */}
        <Route
          exact
          path="/public"
          component={PublicComponent}
        />
        {/* Root Path */}
        <Route
          exact
          path="/"
          component={AccountSwitcher} />
        {/* Home Browse Path */}
        <Route
          exact
          path="/browse"
          component={ContentBrowser} />
        {/* Error Handling Routes */}
        <Route
          component={ErrorComponent}
        />
      </Switch>
    </App>
  );
}

export default routes;
