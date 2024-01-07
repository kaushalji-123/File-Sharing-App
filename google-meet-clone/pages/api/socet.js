import {server} from "socket.io";

const Sockethandler = (req,res) =>{
    if(res.socket.server.io){
        console.log("socket is already running");
    }
    else{
        const io= server(res.socket.server);  //creating socket instance
        res.socket.server.io = io;   //adding the property to http request object

        io.on('connection', (socket) =>{
            console.log("server is connected")
        })
    }
    res.end();
}

export default Sockethandler;