import React, { useState } from 'react';
import "./LogIn.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom"
// import PropTypes from 'prop-types';

// LogIn.propTypes = {

// };

const useStyles = makeStyles((theme) => ({
    root: {
        width: '25ch',
        margin: "0 auto",
        "& > *": {
            marginBottom: 10
        }
    }
}));

function LogIn(props) {
    const classes = useStyles();
    const [user, setUser] = useState({ user: "", room: "" });

    const handleChange= (e) => {
        let {name} = e.target 
        setUser({
            ...user,
            [name]: e.target.value
        });
    }

    return (
        <div className="LogIn">
            <div className="LogInForm">
                <h3>Join Room</h3>
                <form className={classes.root}>
                    <TextField fullWidth
                        label="User Name"
                        name="user"
                        value={user.user}
                        onChange={handleChange}
                    />
                    <TextField fullWidth
                        label="Room Chat"
                        name="room"
                        value={user.room}
                        onChange={handleChange}
                    />
                    <Link 
                    onClick = { (event) => user.user.trim() && user.room.trim() ? null : event.preventDefault() }
                    to={`/chatpage?name=${user.user.trim()}&room=${user.room.trim()}`}
                    >
                        <Button variant="contained" color="primary">
                            Join
                        </Button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default LogIn;