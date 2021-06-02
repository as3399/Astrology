import React from "react";
import { isLogIn } from "../SignUp"
import { isLogIn2 } from "../LoginPage"
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLogIn() ? <Component {...props}/> : <Redirect to="/signup"/>
      }
    />
  )
};
export default PrivateRoute;
