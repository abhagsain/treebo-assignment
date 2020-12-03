import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import Home from "./pages/home";
import HotelDetails from "./pages/hotel-details";

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
