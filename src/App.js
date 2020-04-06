import React, {Component} from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
    constructor() {
        super();
        this.state = {
            response: false,
            endpoint: "http://192.168.100.3:3000"
        };
    }

    componentDidMount() {
        const {endpoint} = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("taxiRequest", data => this.setState({response: data}));
        socket.emit('taxiRequest', 'Hello server');

    }


    render() {

        const requestDriver = async () => {
            const socket = socketIOClient.connect('http://192.168.100.3:3000');
            socket.on('connect', () => {
                socket.emit('taxiRequest', 'vergaaaaaaaaaaaaaaa');

            });


        }; //Buscar conductor

        function test() {
            var socket = socketIOClient.connect('http://localhost:3000/');
            socket.on('connect', function () {
                socket.emit('taxiRequest', 'Hello server');
            });

            socket.on('news', function (msg) {
                alert('News from server: ' + msg.hello);
            });
        }

        const {response} = this.state;
        return (
            <div style={{textAlign: "center"}}>
                <button onClick={requestDriver}>requestDriver</button>
                <button style={{width: 200, height: 50}} onClick={test}>test</button>
                {response
                    ? <p>
                        The temperature in Florence is: {response} °F
                    </p>
                    : <p>Loading...</p>}
            </div>
        );
    }
}

export default App;
