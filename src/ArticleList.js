import React from 'react'
import Article from './Article'

export default function ArticleList({ articles }) {
    const articalElements = articles.map((article) => <li key={article.id}> <Article article={article} /> </li>)
    return (
        <ul>
            {articalElements}
        </ul>
    )
}