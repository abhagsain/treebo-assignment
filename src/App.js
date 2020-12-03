import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
const Layout = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={HotelDetails} path="/:id/details" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
