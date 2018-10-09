import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    //Lifecycle methods are only available for class based components!
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options}))
            }
        } catch(e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('save data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWIllUnmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options:[] }));
    }

    handleDeleteOption(option) {
        this.setState((prevState) =>({
            options: prevState.options.filter((o) => o!==option)
        }));
    }

    handlePick() {
        const length = this.state.options.length;
        const index = Math.floor((Math.random()*length));
        alert(this.state.options[index]);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter a valid thing to do!';
        } 
        else if(this.state.options.indexOf(option) != -1) {
            return 'This option already exists!';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
        // It is important to wrap the object body in () otherwise it will not be seen as an object!
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} 
                onPick={this.handlePick} />
                <Options
                  options={this.state.options}
                  onDeleteOptions={this.handleDeleteOptions}
                  onDeleteOption={this.handleDeleteOption}   
                />
                <AddOption onAddOption={this.handleAddOption} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;