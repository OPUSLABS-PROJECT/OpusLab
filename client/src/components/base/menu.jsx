import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { Link } from 'react-dom' /* set to actual react router and add links*/
import Button from 'material-ui/Button';

/*DropDown menu component*/
import Proyectos from './DropDown.jsx'


  const HeaderBar = () => (
      <AppBar id='appBar'>
          <Toolbar id='menu'>
          <Button id='Home' component={Link} to="/example">Opus</Button>
          <Button id='About' component={Link} to="/aboutUs">Nosotros</Button>
          <Proyectos id='Proyectos' component={Link} to="/proyectos">Proyectos</Proyectos>
          <Button id='Workshop' component={Link} to="/workshop">Formacion</Button>
          <Button id='Contactus' component={Link} to="/contactUs">Contáctanos</Button>
          </Toolbar>
      </AppBar>
  );

  export default HeaderBar;
