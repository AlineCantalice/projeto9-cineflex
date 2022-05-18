import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectMovie from "./components/select-movie/SelectMovie";

import "./assets/css/reset.css";
import "./assets/css/style.css";
import Header from "./shared/header/Header";
import SelectSession from "./components/select-session/SelectSession";

export default function App() {
    return (
        <BrowserRouter >
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<SelectMovie />} />
                    <Route path="/filme/:idMovie" element={<SelectSession />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}