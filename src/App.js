import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Counter from "./containers/Counter/Counter";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
            <Route path="/counter" component={Counter} />
        </Switch>
      </Layout>
    );
  }
}





export default App;
