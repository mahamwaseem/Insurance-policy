import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./My_components/Header";
import Footer from "./My_components/Footer";
import Home from "./My_components/pages/Home";
import Apply from './My_components/pages/Apply';
import Dashboard from './My_components/pages/Dashboard';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/apply">
          <Apply />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
