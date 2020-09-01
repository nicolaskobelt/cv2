import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import '../css/navBar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  AppBar: {
    background: "#2b2a2a"
  },
  button: {
    color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const [src, setSrc] = useState('../../assets/nk_log.svg');

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar}>
        <Toolbar variant="dense">
          <img src={src}
          onMouseOver={() => {setSrc("../../assets/nk_log_color.svg")}}
          onMouseOut={() => {setSrc("../../assets/nk_log.svg")}}
          className="logo" alt="NK" /> 
          <Button className={classes.button} >About me</Button>
          <Button className={classes.button} >Portfolio</Button>
          <Button className={classes.button} >Experience</Button>
          <Button className={classes.button} >Education</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
