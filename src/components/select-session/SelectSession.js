import axios from "axios"
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Footer from "../../shared/footer/Footer";

import "./select-session.css";

export default function SelectSession() {

    const { idMovie } = useParams();

    const [sessions, setSessions] = useState([]);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        console.log('useEffect')
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`)
    
        promise.then(response => {
            setSessions([...response.data.days])
            setMovie({...response.data});
        })
      }, [])

    console.log(movie)

    return (
        <>
            <div className="conteiner">
                <p>Selecione o horário</p>
                <div className="schedules">
                    {sessions.map((value, index) => (
                        <div className="schedule">
                            <p>{value.weekday} - {value.date}</p>
                            <div className="buttons">
                                <button>{value.showtimes[0].name}</button>
                                <button>{value.showtimes[1].name}</button>
                            </div>
                        </div>
                    ))}
                        
                </div>
            </div>
            <Footer srcImage={movie.posterURL} movieName={movie.title} />
        </>
    )
}