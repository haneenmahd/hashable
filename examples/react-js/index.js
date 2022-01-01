import React from "react";
import axios from "axios";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        
        this.state = {
          reqUrl: "https://hashable-server.herokuapp.com",
          str: "HelloWorld",
          algo: "sha256",
          encoding: "hex",
          hash: ""
        };

        this.getHash = this.getHash.bind(this);
    }

    componentDidMount() {
        this.getHash();
    }

    getHash() {
        axios
          .get(`${this.state.reqUrl}/api/hash?algorithm=${this.state.algo}&str=${this.state.str}&encoding=${this.state.encoding}`)
          .then((res) => this.setState(hash, res.data))
          .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <p>Hashed <b>{this.state.str}</b> into <i>{this.state.hash}</i></p>
            </div>
        );
    }
};