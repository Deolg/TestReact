import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ArticlesChart extends Component {

    render() {
        return (
            <div ref ='chart'></div>
        );
    }

    componentWillReceiveProps(nextProps){
        //update chart for new articles 
    }
}

componentName.propTypes = {};

export default ArticlesChart;