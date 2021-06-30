import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

// import PropTypes from 'prop-types';

// FormChat.propTypes = {

// };

const useStyles = makeStyles((theme) => ({
  inforRoom: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1
  },
  avartar: {
    display: "flex",
    alignItems: "center"
  },
  mrleft: {
    margin: "0 20px",
    width: "100%",
    textAlign: 'left',
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }
}));

function InforRoom({ name, room }) {
  const classes = useStyles()
  return (
    <Grid item xs={3} className={classes.inforRoom}>
      <Paper className={classes.paper}>
        <div>
          <h2>{room}</h2>
        </div>
        <div title={name} className={classes.avartar}>
          <Avatar alt={name} src="" style={{ cursor: "pointer" }} />
          <span className={classes.mrleft} title={name}>User: {name}</span>
        </div>
      </Paper>
    </Grid>
  );
}

export default InforRoom;