import React, { Component } from 'react'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'


class Comments extends Component {

    static PropTypes = {
        comments: PropTypes.shape({
            text: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired
        })
    }

    state={
        newComment:false
    }
    

    render() {
        const { comments, isOpen, toggleOpen } = this.props
        const commentsElements = comments.map((comment) => {
            return <p key={comment.id}> <b>{comment.user}</b>  {comment.text} </p>
        })
        return (
            <div>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Hide Comments' : 'Show Comments'}
                </button>
                <button onClick={this.addComment}>
                    'Новый комментарий'
                </button>
                
                <div className="commentsElements">
                    {isOpen ? commentsElements : null}
                </div>

                <div className="newComment">
                    {this.state.newComment ? <CommentForm /> :null }
                </div>

            </div>
        )
    }

    addComment=()=>{
        this.setState({
            newComment: true
        })
    }
   
}
export default toggleOpen(Comments)