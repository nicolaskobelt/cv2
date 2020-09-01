import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
    fabButton: {
      position: 'absolute',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      zIndex: 1,
      bottom: 45,
      right: 45,
    },
}));

export default function AppBarBottom() {
    const classes = useStyles();

    return (
        <div>
        <CssBaseline />
        <Tooltip title="Stay in touch" aria-label="contact">
            <Fab color="secondary" aria-label="contact" className={classes.fabButton}>
              <PermContactCalendarOutlinedIcon />
            </Fab>
        </Tooltip>
        </div>

    );
}