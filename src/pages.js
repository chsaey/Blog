import React from "react"
import {Link} from "react-router-dom"

export function Home() {
    return(
        <div>
            <h1>Charles Saeyang</h1>
            <nav>
                <Link to="blog">Blog</Link>
                </nav>
        </div>
    )
}

export function Blog() {
    return(
        <div>
            <h1>blog</h1>
        </div>
    )
}

export function Error() {
    return(
        <div>
            <h1>This page does not exist!</h1>
        </div>
    )
}