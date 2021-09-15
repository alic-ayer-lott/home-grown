import React from "react"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./nav/NavBar";


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
