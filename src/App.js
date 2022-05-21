import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectMovie from "./components/select-movie/SelectMovie";

import "./assets/css/reset.css";
import styled from "styled-components"
import Header from "./shared/header/Header";
import SelectSession from "./components/select-session/SelectSession";
import SelectSeat from "./components/select-seat/SelectSeat";
import Success from "./components/success/Success";

export default function App() {
    return (
        <BrowserRouter >
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<SelectMovie />} />
                    <Route path="/sessoes/:idMovie" element={<SelectSession />} />
                    <Route path="/assentos/:idSession" element={<SelectSeat />} />
                    <Route path="/sucesso" element={<Success />} />
                </Routes>
            </Main>
        </BrowserRouter>
    )
}

const Main = styled.main`
    position: relative;
    width: 100%;
    height: 90vh;
    top: 67px;
    left: 0;
    margin-bottom: 125px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`