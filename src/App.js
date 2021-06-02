import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router";
import SignUpPage from "./components/SignUp";
import UserPanel from "./components/UserDashboard/UserPanel";
import ErrorPage from "./components/ErrorPage";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import "./components/AdminDashboard/Imports"
import AdminPanel from "./components/AdminDashboard/AdminPanel";
import AddUser from "./components/AdminDashboard/AddUser";
import AdminLogin from "./components/AdminLogin";
import PrivateRoute from "./components/AdminDashboard/PrivateRoute";
export default function App() {

  return (
    <>
        <Switch>
          <Route exact path="/" component={()=>{return <HomePage/>}} />
          <Route exact path ="/login" component={()=>{return( <LoginPage/>)}}/>
          <PrivateRoute path ="/AdminPanel" component={({match})=>{return <AdminPanel match={match}/>}}/>
          <Route exact path ="/signup" render={()=>{return (<SignUpPage/>)}}/>
          <Route exact path ="/UserDashboard" component={()=>{return <UserPanel/>}}/>
          <Route exact path ="/ErrorPage" component={()=>{return <ErrorPage/>}}/>
          <Route exact path ="/forgetPswd" component={()=>{return <ForgetPassword/>}}/>
          <Route exact path ="/resetpassword/:id" component={({match})=>{return <ResetPassword match={match}/>}}/>
          <Route exact path="/AddUser" component={()=> {return <AddUser/>}} />
          <Route exact path="/AdminSignin" component={()=> {return <AdminLogin/>}} />
          <Route render ={()=>{return <ErrorPage/>}}/>

        </Switch>
    </>
  );
}
