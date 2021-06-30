import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InfoRoom from './InfoRoom/InfoRoom';
import ContentChat from './ContentChat/ContentChat';
import queryString from "query-string"
import { useHistory } from 'react-router-dom';
import io from "socket.io-client"

const useStyles = makeStyles(() => ({
    pageChat: {
        height: "100vh"
    },
}));

const socket = io("http://localhost:8000")

function PageChat({ location }) {
    const [name, setName] = React.useState("");
    const [room, setRoom] = React.useState("");
    const [message, setMessage] = React.useState([])
    const classes = useStyles();
    const history = useHistory();


    React.useEffect(() => {
        const data = queryString.parse(location.search);
        socket.on("message", payload => {
            setMessage([...message, payload])
            console.log(payload);
        })
        
        if (location.search) {
            setName(data.name);
            setRoom(data.room);
        } else {
            history.push("/")
        }
        return () => {
            socket.off()
        }
    }, [location.search, history, name, room, message])

    const sendMessageRealTime = (message) => {
        socket.emit("message", { message, name });
        console.log(message, name);
    }

    return (
        <Grid container className={classes.pageChat}>
            <InfoRoom name={name} room={room} />
            <ContentChat
                sendMessageRealTime={sendMessageRealTime}
                message={message}
                name= {name}
            />
        </Grid>
    );
}

export default PageChat;