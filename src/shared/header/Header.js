import styled from "styled-components";

export default function Header() {
    return (
        <Headers>
            <h1>CINEFLEX</h1>
        </Headers>
    )
}

const Headers = styled.header`
    width: 100vw;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    h1 {
        font-size: 34px;
        color: #E8833A;
    }

    p {
        font-size: 24px;
        color: #293845;
    }
`