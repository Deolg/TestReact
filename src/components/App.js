import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react'

import ArticleList from './ArticleList'

import UserForm from './UserForm'

import Select from 'react-select'

class App extends Component {
    state = {
        selection: null
    }

    render() {
        const options = this.props.articles.map(article =>({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <UserForm />
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} multi/>
                <ArticleList articles={this.props.articles} />
            </div>
        );
    }

    changeSelection = selection => this.setState({ selection })

}

App.propTypes = {};

export default App;