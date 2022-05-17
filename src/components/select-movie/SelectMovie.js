import movie from "../../assets/images/image 3.png";
import "./select-movie.css";

export default function SelectMovie() {
    return (
        <div className="conteiner-movie">
            <p>Selecione o filme</p>
            <div className="movies">
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
                <img src={movie} als="movie" />
            </div>
        </div>
    )
}