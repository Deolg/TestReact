import React, { Component } from 'react'

export default class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        const { comments } = this.props
        const { isOpen } = this.state
        const commentsElements = comments.map((comment) => {
            return <p key={comment.id}> {comment.text} </p>
        })
        return (
            <div>
                <button onClick={this.toggleOpen.bind(this)}>
                    {isOpen ? 'hide' : 'show'}
                </button>
                <div className="test">
                    {isOpen ?  commentsElements  : null}
                </div>
            </div>
        )
    }

    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}