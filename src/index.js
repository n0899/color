import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Color extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            step: 1,
            red: 'red show',
            yellow: 'yellow hide',
            green: 'green hide'
        };
    }
    componentDidMount() {
        this.timer = setInterval(
            () => this.changeStep(),
            4000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    changeStep(){
        let step = this.state.step;
        if(step > 3){
            step = 1;
        }else{
            step += 1;
        }
        this.setState({step: step});
        if(step === 1){
            this.setState({
                red: 'red show',
                yellow: 'yellow hide',
                green: 'green hide'
            });
        }else if (step === 2){
            this.setState({
                red: 'red show',
                yellow: 'yellow show',
                green: 'green hide'
            });
        } else if (step === 3){
            this.setState({
                red: 'red hide',
                yellow: 'yellow hide',
                green: 'green show'
            });
        }else if (step === 4){
            this.setState({
                red: 'red hide',
                yellow: 'yellow show',
                green: 'green hide'
            });
        }
    }
    render(){
        return(
            <div className="color">
                <div className={this.state.red}> </div>
                <div className={this.state.yellow}> </div>
                <div className={this.state.green}> </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Color />,
    document.getElementById('root')
);
