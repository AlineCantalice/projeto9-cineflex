import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import movie from "../../assets/images/image 3.png";
import "./select-movie.css";

export default function SelectMovie() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            setMovies([...response.data]);
        })
    }, []);

    return (
        <div className="conteiner-movie">
            <p>Selecione o filme</p>
            <div className="movies">
                {movies.map((value) => (
                    <div className="movie">
                        <Link to={`/filme/${value.id}`}>
                            <img src={value.posterURL} key={value.id} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}