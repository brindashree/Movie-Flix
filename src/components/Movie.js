import React from 'react';


const image_api = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green';
    }
    else if (vote >= 6) {
        return 'orange';
    }
    else {
        return 'red';
    }
}

const Movie = ({ title, poster_path, vote_average ,Component,favtitle}) => {
    
    return (
        <div className="movie" >
            <img src={poster_path ? image_api + poster_path :"https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                } alt={title} />
            <div className="movie-info">
                <h6>{title}</h6>
                
                <span className={`tag ${setVoteClass(vote_average)}`} >{vote_average}</span>
                
            </div>
            <div className="overlay">
                <Component title={favtitle}/>
            </div>
            
        </div>
    );
}
 
export default Movie;