import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function SelectMovie() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            setMovies([...response.data]);
        })
    }, []);

    return (
        <Container>
            <p>Selecione o filme</p>
            <Movies>
                {movies.map((value) => (
                    <Movie>
                        <Link to={`/sessoes/${value.id}`}>
                            <img src={value.posterURL} key={value.id} />
                        </Link>
                    </Movie>
                ))}
            </Movies>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
        margin-bottom: 30px;
    }
`

const Movies = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Movie = styled.div`
    width: 145px;
    height: 209px;
    border-radius: 3px;
    margin: 6px 15px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 129px;
        height: 193px;
    }
`