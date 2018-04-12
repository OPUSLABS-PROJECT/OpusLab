import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from "react-router-dom";
import PrimaryPage from './PrimaryPage.jsx'

/*Components */
import Footer from '../src/components/base/footer.jsx'
import HeaderBar from '../src/components/base/menu.jsx'


class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Route path="/" component={PrimaryPage} />
      </BrowserRouter>
    )}
};
ReactDOM.render(<App />, document.getElementById('app'))
