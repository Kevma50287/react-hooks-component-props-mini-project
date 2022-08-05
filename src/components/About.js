import React from "react";

function About({image}){
    return (
        <aside>
            <img src={image ? image : "https://via.placeholder.com/215"} alt="blog logo" />
            <p>About this blog</p>
        </aside>
    )
}

export default About