import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';

export default function App(props) {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/about" component={About}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
      <Footer />
    </>
  )
}

