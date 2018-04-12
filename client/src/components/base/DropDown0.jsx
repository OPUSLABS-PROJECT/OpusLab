import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Link } from 'react-dom'
import Fade from 'material-ui/transitions/Fade';

class Proyectos extends React.Component {
  constructor(props){
    super(props)

  this.state = {
    anchorEl: null,
  }
  this.handleClick = this.handleClick.bind(this);
  this.handleClose = this.handleClose.bind(this)
}

  handleClick(e) {
    this.setState(
      {anchorEl: e.currentTarget }
    )
  }

  handleClose(e) {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button id='proyectos'
          aria-owns={anchorEl ? 'dropDown' : null}
          aria-haspopup="true"
          onClick={this.handleClick}>
          Proyectos
        </Button>
        <Menu
          id="dropMenu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}>
          <MenuItem id='Produccion' component={Link} to="/production">Produccion</MenuItem>
          <MenuItem id='Realizacion' component={Link} to="/realizacion">Realizacion de Contenidos</MenuItem>
          <MenuItem id='Seguimiento' component={Link} to="/realizacion">Seguimiento de Obra</MenuItem>
          <MenuItem id='Documentary' component={Link} to="/followUp">Documentales</MenuItem>
          <MenuItem id='Colaboration' component={Link} to="/colaboration">Colaboraciones</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Proyectos;
