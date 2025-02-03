import React from "react";
import "./movieCards.css";

function MovieCard({title, postUrl, Desc }){
    return (
        <div className = "movie-card">
            <img
                src={postUrl}
                alt={title}
                className="PosterImage"
            />
            <div className="Title">{title}</div>
            <div className="Desc">{Desc}</div>
        </div>
    );
}

export default MovieCard