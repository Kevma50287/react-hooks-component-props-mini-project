import React from 'react'

function emoji (minutes){
    let icon
    let multiple
    //for some reason, if res is not undefined, and we append a string to it, JS treats the undefined value as a string, resulting in undefined (emoji)
    let res=""
    if (minutes < 30){
        icon = "☕️"
        multiple = Math.floor(minutes/5)
    } else {
        icon = "🍱"
        multiple = Math.floor(minutes/10)
    }
    //can't take a string and multiply it by a number in JS, but you can in python
    for (let i = 0; i < multiple; i++) {
        res += icon
    }
    console.log(multiple, res)
    return res
}

function Article({ title, date = "January 1, 1970", preview, minutes}) {
  return (
    <article>
        <h3>{title}</h3>
        <small>{date}{emoji(minutes)}{minutes} min read</small>
        <p>{preview}</p>
    </article>
    
  )
}

export default Article
