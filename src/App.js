import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./compoment/contacts/Contacts";
import AddContact from "./compoment/contacts/AddContact";
import EditContact from "./compoment/contacts/EditContact";
import Header from "./compoment/layout/Header";
import About from "./compoment/pages/About";
import NotFound from "./compoment/pages/NotFound";
import Provider from "./Context";
import Test from "./compoment/Test/Test";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header titles="Contact Manager" />
            <div className="container">
              <Switch>
                {/* <Route exact path="/about/:id" component={About} /> */}
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
