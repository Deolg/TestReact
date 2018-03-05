import React, { Component } from 'react'
import Comments from './Comments'


export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        const { article } = this.props
        const { isOpen } = this.state
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen.bind(this)}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
                {isOpen ? <section>{article.text}</section> : null}
                {/* {this.getComments(article)} */}
                {isOpen && article.comments ? <Comments comments={article.comments} />: null}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const { article } = this.props

        return <section>{article.text}</section>
    }

    getComments(){
        
    }

    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}