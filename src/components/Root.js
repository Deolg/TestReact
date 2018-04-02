import PropTypes from 'prop-types';
import React, { Component } from 'react';
import App from './App'
import store from '../store'
import { Provider } from 'react-redux'


function Root(props) {
    console.log('props', props);
    return (
        <Provider store={store} >
            <App {...props} />
        </Provider >
    )
}

Root.propTypes = {};

export default Root;