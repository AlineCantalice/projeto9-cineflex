import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Success({ userData, setUserData }) {

    const { buyerInfo, date, title, showtime, seatsNumber } = userData;
    const { name, cpf } = buyerInfo
    const navigate = useNavigate();

    const seatsOrdered = seatsNumber.sort((a, b) => {
        if (a > b) return 1
        if (a < b) return -1
        return 0
    })

    function backAgain() {
        setUserData({});
        navigate("/");
    }

    return (
        <>
            <Container>
                <p>Pedido feito com sucesso!</p>
                <Info>
                    <p>Filme e sessão</p>
                    <Texts>
                        <p>{title}</p>
                        <p>{date} - {showtime}</p>
                    </Texts>
                    <p>Ingressos</p>
                    <Texts>
                        {seatsOrdered.map(value => (
                            <p>{`Assento ${value}`}</p>
                        ))}
                    </Texts>
                    <p>Comprador</p>
                    <Texts>
                        <p>{`Nome: ${name}`}</p>
                        <p>{`CPF: ${cpf}`}</p>
                    </Texts>
                </Info>
            </Container>
            <Button onClick={backAgain}>Voltar pra Home</Button>
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
        width: 60%;
        font-weight: 700;
        margin-bottom: 30px;
        font-size: 24px;
        color: #247A6B;
        text-align: center;
    }
`

const Button = styled.button`
    width: 225px;
    height: 42px;
    font-family: 'Roboto';
    font-size: 18px;
    color: #FFFFFF;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 10px;

    p {
        text-align: left;
        width: 100%;
        color: #293845;
        margin: 3px 0;
    }
`

const Texts = styled.div`
    margin-bottom: 30px;

    p {
        font-weight: 400;
        font-size: 22px;
    }

`