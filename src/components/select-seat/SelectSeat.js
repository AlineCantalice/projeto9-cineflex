import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../../shared/footer/Footer";

export default function SelectSeat() {

    const { idSession } = useParams();
    const [seats, setSeats] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
        promise.then(response => {
            setInfo({...response.data})
        })
    }, []);

    console.log(info)

    return (
        <>
        </>
    )
}