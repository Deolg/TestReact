import React from 'react'
import { render } from 'react-dom'
import Article from './Article'
import {articles} from './fixtures'

function HelloWorld() {
    return <h2> Hello </h2>
}

render(<Article article = {articles[0]} />, document.getElementById('container'));