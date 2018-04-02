import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {connect} from 'react-redux'

class Counter extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <button onClick={this.handlerIncrement} >Increment me</button>
            </div>
        );
    }

    handlerIncrement = () => {
        console.log("---------",'increment');
    }
}

function mapStateToProps(state){
    return{
        counter: state.count
    }
}

const decorator = connect(mapStateToProps)

Counter.propTypes = {
    counter: PropTypes.number
};

export default decorator(Counter);