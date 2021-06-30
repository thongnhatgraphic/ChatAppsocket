import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

ContentChat.propTypes = {
  sendMessageRealTime: PropTypes.func,
  message: PropTypes.array,
  name: PropTypes.string
};
const useStyles = makeStyles((theme) => ({
  contentChat: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  form: {
    display: "flex",
    flexDirection: "row",
    borderTop: "1px solid rgba(0,0,0,0.2)"
  },
  submit: {
    display: "inline-block",
    width: 200,
    marginLeft: 20,
    marginTop: 20
  },
  boxMessage: {
    flexGrow: 1,
    padding: 20,
    overflow: "hidden"
  },
  viewMessage: {
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.02)",
    overflowY: "scroll"
  },
  messageSelf: {
    textAlign: "right",
    margin: "15px 5px 0px 0px",
    backgroundColor: "#58bae8",
    padding: "10px 20px",
    display: "inline-block",
    borderRadius: 5
  },
  messageThem: {
    textAlign: "left",
    margin: "15px 5px 0px 0px",
    backgroundColor: "#d1d1d2",
    display: "inline-block",
    borderRadius: 5,
    padding: "10px 20px",
  },
  alignRigh: {
    textAlign: "right"
  },
  alignLeft: {
    textAlign: "left"
  }
}));

function ContentChat({ sendMessageRealTime, message, name }) {
  const classes = useStyles();
  const [sendMessage, setSendMessage] = React.useState("")

  const onHandleSend = (e) => {
    e.preventDefault()
    console.log(e.key);
    sendMessageRealTime(sendMessage);
    setSendMessage("")
  }
  return (
    <Grid item xs={9} className={classes.contentChat}>
      <Paper className={classes.paper}>
        <div className={classes.boxMessage}>
          <div className={classes.viewMessage}>
            {message.map((item, index) => {
              return (<div key={index}>
                <div className={item.name === name ? classes.alignRigh : classes.alignLeft}>
                  <div className={item.name === name ? classes.messageSelf : classes.messageThem}>
                    {item.message}
                    <br></br>
                    <small>{item.name}</small>
                  </div>
                </div>
              </div>)
            })}
          </div>
        </div>
        <form className={classes.form} onSubmit={onHandleSend}>
          <TextField id="standard-basic"
            label="Field messsage"
            placeholder="field message"
            fullWidth
            value={sendMessage}
            onChange={(e) => { setSendMessage(e.target.value) }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onHandleSend}
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default ContentChat;