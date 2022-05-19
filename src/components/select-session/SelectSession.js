import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Footer from "../../shared/footer/Footer";

import styled from "styled-components";

export default function SelectSession() {

    const { idMovie } = useParams();

    const [sessions, setSessions] = useState([]);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`)

        promise.then(response => {
            setSessions([...response.data.days]);
            setMovie({ ...response.data });
        })
    }, [])

    return (
        <>
            <Container>
                <p>Selecione o horário</p>
                <Schedules>
                    {sessions.map((value, index) => (
                        <Schedule>
                            <p>{value.weekday} - {value.date}</p>
                            <Buttons>
                                <Link to={`/assentos/${value.showtimes[0].id}`}>
                                    <button>{value.showtimes[0].name}</button>
                                </Link>
                                <Link to={`/assentos/${value.showtimes[1].id}`}>
                                    <button>{value.showtimes[1].name}</button>
                                </Link>
                            </Buttons>
                        </Schedule>
                    ))}
                </Schedules>
            </Container>
            <Footer srcImage={movie.posterURL} movieName={movie.title} />
        </>
    )
}

const Container = styled.div`
    width: 90vw;
    position: relative;
    top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin-bottom: 50px;
    }
`

const Schedules = styled.div`
    width: 90vw;
    margin-bottom: 125px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const Schedule = styled.div`
    width: 100%;
    margin-bottom: 23px;
    display: flex;
    flex-direction: column;

    p {
        margin: 0;
        font-size: 20px;
    }
`

const Buttons = styled.div`
    margin-top: 22px;
    display: flex;

    button {
        width: 82px;
        height: 43px;
        margin-right: 8px;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        font-size: 18px;
        color: #FFFFFF;
    }
`