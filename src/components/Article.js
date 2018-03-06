import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comments from './Comments'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {

    static PropTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    }
    
    render() {
        const { article, isOpen, toggleOpen } = this.props
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
                {this.getComments(article.comments)}
            </div>
        )
    }

    getBody() {
        console.log(this.props);
        const { article, isOpen, toggleOpen } = this.props
        
        if (!isOpen) return null
        return <section>{article.text}</section>
    }

    getComments(comments) {
        const { article, isOpen, toggleOpen } = this.props
        if (!isOpen || !comments) return null
        return <section><Comments comments={comments} /></section>
    }

}

export default toggleOpen(Article)