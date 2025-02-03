import React from "react";
import "./movieCards.css";

function MovieCard({title, postUrl }){
    return (
        <div className = "movie-card">
            <img
                src={postUrl}
                alt={title}
                className="PosterImage"
            />
            <div className="Title">{title}</div>
            <button>My Button</button>
        </div>
    );
}

export default MovieCard