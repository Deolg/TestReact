import React, { Component } from 'react'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'


class Comments extends Component {

    static PropTypes = {
        comments: PropTypes.shape({
            text: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired
        })
    }

    render() {
        const { comments, isOpen, toggleOpen } = this.props
        const commentsElements = comments.map((comment) => {
            return <p key={comment.id}> {comment.text} </p>
        })
        return (
            <div>
                <button onClick={toggleOpen}>
                    {isOpen ? 'hide' : 'show'}
                </button>
                <div className="test">
                    {isOpen ? commentsElements : null}
                </div>
            </div>
        )
    }
}
export default toggleOpen(Comments)