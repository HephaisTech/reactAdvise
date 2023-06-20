import React from "react";
import axios from "axios";
import './App.css';

class App extends React.Component {

    state = {
        advice: '',
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(res => {
                const { advice } = res.data.slip;
                this.setState({ advice })

            })
            .catch(err => {
                console.log(err);
            });

    }
    render() {
        return (
            <div className="app">
                <div className="card" onClick={this.fetchAdvice} >
                    <h1 className="heading">{this.state.advice}</h1>
                </div>
            </div>
        );

    }
}

export default App;