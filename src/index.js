import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import { articles } from './fixtures'
import store from './store'


function HelloWorld(){
    return <h2>Hello</h2>
}

render(<Root articles={articles} />, document.getElementById('container'));