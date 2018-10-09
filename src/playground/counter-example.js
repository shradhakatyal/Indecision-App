class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.onAddOne = this.onAddOne.bind(this);
        this.onMinusOne = this.onMinusOne.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onAddOne() {
        // this.setState({count: ++this.state.count});// Passing a function into this.setState is better and will be used in future so use that syntax
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    onMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    onReset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        });
    }

    componentDidMount() {
        let count = localStorage.getItem('count');
        count = parseInt(count, 10);
        if(!isNaN(count)) {
            this.setState(() => ({count}))
        }
    }

    componentDidUpdate(prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.onAddOne}>+1</button>
                <button onClick={this.onMinusOne}>-1</button>
                <button onClick={this.onReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));