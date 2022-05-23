import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components"

import Footer from "../../shared/footer/Footer";

export default function SelectSeat({ setUserData }) {
    const { idSession } = useParams();
    const [seatName, setSeatName] = useState([]);
    const [ids, setIds] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [info, setInfo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
        promise.then(response => {
            setInfo({ ...response.data })
        })
    }, []);

    function changeState(id, element) {
        if (!element.isAvailable) {
            alert("Esse assento não está disponível");
        } else {
            if (element.id === id) {
                if (ids.includes(id)) {
                    const array = [];
                    const names = [];
                    for (let i = 0; i < ids.length; i++) {
                        if (ids[i] !== id) {
                            array.push(ids[i])
                            names.push(seatName[i])
                        }
                    }
                    setIds(array);
                    setSeatName(names);
                } else {
                    setIds([...ids, id]);
                    setSeatName([...seatName, element.name]);
                }
            }
        }
    }

    function save(event) {

        event.preventDefault();

        if(ids.length === 0){
            alert("Escolha pelo menos um assento");
        } else if(name === "") {
            alert("Preencha seu nome");
        } else if(cpf === "") {
            alert("Preencha seu CPF");
        } else {

            const data = {
                ids,
                name,
                cpf
            }

            const promise = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, data);
            promise.then(() => {
                const obj = { title: info.movie.title, date: info.day.date, showtime: info.name, buyerInfo: data, seatsNumber: seatName }
                setUserData(obj);
                setIds([]);
                setCpf("");
                setName("");
                navigate("/sucesso");
            })
        }
    }

    function cpfMask(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }

    return (
        <>
            {!info ? "Carregando" :
                (
                    <>
                        <Container>
                            <p>Selecione o(s) assento(s)</p>
                            <Seats>
                                {info.seats.map((value) => (
                                    <Seat status={value.isAvailable} selected={ids.includes(value.id) ? true : false} onClick={() => changeState(value.id, value)}>{value.name}</Seat>
                                ))}
                            </Seats>

                            <Seats>
                                <Status>
                                    <Selected />
                                    <p>Selecionado</p>
                                </Status>
                                <Status>
                                    <Available />
                                    <p>Disponível</p>
                                </Status>
                                <Status>
                                    <Unavailable />
                                    <p>Indisponível</p>
                                </Status>
                            </Seats>
                            <Form onSubmit={save}>
                                <label htmlFor="name">Nome do comprador:</label>
                                <input id="name" type="text" value={name} placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} required></input>

                                <label htmlFor="cpf">CPF do comprador:</label>
                                <input id="cpf" type="text" value={cpf} placeholder="Digite seu CPF..." onChange={(e) => setCpf(cpfMask(e.target.value))} required></input>

                                <button type="submit">Reservar assento(s)</button>
                            </Form>
                        </Container>
                        <Footer srcImage={info.movie.posterURL} movieName={info.movie.title} weekday={info.day.weekday} showtime={info.name} />
                    </>
                )}
        </>
    )
}

const Container = styled.div`
    position: relative;
    top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin-bottom: 30px;
    }
`

const Seats = styled.div`
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Seat = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    margin: 9px 3px;
    color: #000000;
    background-color: ${props => props.selected ? "#8DD7CF" : (props.status ? "#C3CFD9" : "#FBE192")};
    border: 1px solid ${props => props.selected ? "#808F9D" : (props.status ? "#808F9D" : "#F7C52B")};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Status = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 13px;
        color: #4E5A65;
        margin: 2px 0;
    }
`

const Available = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 12px;
    margin: 9px 3px;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
`

const Selected = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 12px;
    margin: 9px 3px;
    background-color: #8DD7CF;
    border: 1px solid #7B8B99;
`

const Unavailable = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 12px;
    margin: 9px 3px;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
`

const Form = styled.form`
    width: 90vw;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 108px;

    label {
        color: #293845;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        margin: 7px 0;
    }

    input {
        height: 51px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        padding-left: 18px;
        font-size: 18px;
        color: #AFAFAF;
    }

    button {
        width: 225px;
        height: 42px;
        margin: 57px auto;
        font-family: 'Roboto';
        font-size: 18px;
        color: #FFFFFF;
        background-color: #E8833A;
        border-radius: 3px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`