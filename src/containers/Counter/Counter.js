import React, {Component} from 'react';
import {connect} from 'react-redux'
import './Counter.css'
import {
    addCounter,
    decrementCounter, fetchCounter,
    incrementCounter, saveCounter, subtractCounter,

} from "../../store/actions";
import Spinner from "../../components/UI/Spinner/Spinner";

class Counter extends Component {

    componentDidMount() {
        this.props.fetchCounter();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.ctr !== this.props.ctr) {
            this.props.saveCounter(this.props.ctr)
        }

    }
    render() {
        return (
            <div className='Counter'>
                <h1>{this.props.loading ? <Spinner/> : this.props.ctr}</h1>
                <button onClick={this.props.increaseCounter}>Increase</button>
                <button onClick={this.props.decreaseCounter}>Decrease</button>
                <button onClick={this.props.increaseAddCounter}>Increase by 5</button>
                <button onClick={this.props.decreaseAddCounter}>Decrease by 5</button>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        loading:state.loading
    }
};

const mapDispatchToParams = (dispatch) => {
    return {
        increaseCounter: () => dispatch(incrementCounter()),
        decreaseCounter: () => dispatch(decrementCounter()),
        increaseAddCounter:() => dispatch(addCounter(5)),
        decreaseAddCounter:() => dispatch(subtractCounter(5)),
        fetchCounter:() => dispatch(fetchCounter()),
        saveCounter:() => dispatch(saveCounter())
    }
};

export default connect(mapStateToProps, mapDispatchToParams) (Counter);