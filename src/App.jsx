import React, { useState, useEffect, useRef } from "react";
// import "./app.scss";
import Body from "./components/body/Body";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";


export default function App() {
  
  return (
  
    <div className="app"> 
       {/* <Body/> */}
       <Switch>
         <Route exact path="/" component={Body}/>
         <Route exact path="/login" component={Login}/>
       </Switch>
    </div>
  );
}
{/* <Route exact path="/" component={Home}/>
<Route exact path="/register" component={Register}/>
<Route exact path="/login" component={Login}/> */}

