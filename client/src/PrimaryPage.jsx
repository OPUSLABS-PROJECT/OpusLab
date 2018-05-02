import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/HomePage/Home.jsx';

const PrimaryPage = ({ match }) => (
  <div className="primary-page">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Home}/>
      </Switch>
    </main>
  </div>
)
export default PrimaryPage;
