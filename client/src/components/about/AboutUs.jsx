import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import ImgGrid from './ImgGrid.jsx';
import Member1 from '../about/team/member1.jsx'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <img id='team' src='http://0.media.dorkly.cvcdn.com/12/50/c0c3d24ae27e6c3d7f87334a52d66025.jpg'/>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <h1>Nosotros</h1>
          <p>A Madman with a Box <br /><br />
          The Doctor is not from Earth, he is a Time Lord from the planet Gallifrey. The Time Lords were considered to be one of the oldest and most powerful races in the universe. Sometime in the future the Time Lords went to war against the Daleks and lost, the Doctor is the only known survivor.<br />
          The Doctor having recently escaped Gallifrey and their strict culture was not comfortable with meeting other people on Earth. When Ian and Barbara, two of his Granddaughters school teachers on Earth discovered the TARDIS he kidnapped them because he feared that they would tell others about what they had seen.</p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <h1>Por que Opus!</h1> <br/>
          <p>On the planet Kembel, Space Security Service agent Marc Cory is investigating a recent sighting of a Dalek spaceship. His suspicion that the creatures may have established a base proves well-founded. He learns of a plot by the Daleks to invade and destroy the Solar System, but he is discovered and exterminated. The Daleks and their allies vow to conquer the universe, beginning with the planet Earth. Never!!!!</p><br/><br/><br/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
        <ImgGrid />
        </Paper>
        </Grid>
        <br />
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>
            <Member1 />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><Member1 /></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><Member1 /></Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        <h1>Nuestros Clientes</h1>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
