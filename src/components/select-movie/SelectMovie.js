import axios from "axios";
import React, { useEffect } from "react";

import movie from "../../assets/images/image 3.png";
import "./select-movie.css";

export default function SelectMovie() {

    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            setMovies([...response.data]);
            console.log(movies)
        })
    }, []);

    return (
        <div className="conteiner-movie">
            <p>Selecione o filme</p>
            <div className="movies">
                {movies.map((value, index) => {
                    {
                        <div className="movie">
                            <img src={value.posterURL} key={index} />
                        </div>

                    }
                })}
            </div>
        </div>
    )
}