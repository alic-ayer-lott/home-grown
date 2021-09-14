import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Route, Redirect } from "react-router-dom";


export const HomeGrown = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("grow_customer")) {
            return (
              <>
                <NavBar />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );
