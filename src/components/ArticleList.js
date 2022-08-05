import React from "react";
import Article from "./Article";

// you can use {} on the object property being passed to destructure it
// in this case, as posts was an object with post as the key and an array of objects as the value
// {posts} will assign the value (array of objects) to the posts
function ArticleList({ posts }) {
    console.log(posts)
    //recall that variables can be set equal to JSX elements, functions can return JSX element
    //in general, use map for an array of object to convert them to an array of JSX elements
    //important note, assign a unqiue key to each JSX elment generated this way
    const articles = posts.map(e => (
        <Article
            key={e.id}
            title={e.title}
            date={e.date}
            preview={e.preview}
            minutes={e.minutes}
        />
    ))

    return (
        <main>
            {/* curly braces represents an evaluation of the inner variable as JS 
            articles is an array of three Article JSX objects*/}
            {articles}
        </main>
    )
}

export default ArticleList