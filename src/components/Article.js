
import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import Comments from './Comments'
import toggleOpen from '../decorators/toggleOpen'

import { CSSTransitionGroup } from 'react-transition-group'
import '../css/article.css'


class Article extends Component {

    static PropTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    }

    state = {
        updateIndex: 0
    }

    componentWillMount() {
        console.log('WillMount');
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props
        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {/* {this.getBody()} */}
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={200}
                >
                    {this.getBody()}
                </CSSTransitionGroup>

                {this.getComments(article.comments)}
            </div>
        )
    }

    setContainerRef = (ref) => {
        this.container = ref;
    }

    getBody() {
        const { article, isOpen, toggleOpen } = this.props

        if (!isOpen) return null
        return (
            <section>
                {article.text}
            </section>
        )
    }

    getComments(comments) {
        const { article, isOpen, toggleOpen } = this.props
        if (!isOpen || !comments) return null
        return <section><Comments ref={this.getCommentsRef} comments={comments} key={this.state.updateIndex} /></section>
    }

    getCommentsRef = (ref) => {

    }

}

export default toggleOpen(Article)