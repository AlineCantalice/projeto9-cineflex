import "./footer.css"

export default function Footer({ srcImage, movieName, weekday, showtime }) {
    return (
        <div className="footer">
            <div className="footer-image">
                <img src={srcImage} alt="movie-footer" />
            </div>
            <div className="footer-text">
                <p>{movieName}</p>
                {weekday ? <p>{weekday} - {showtime}</p> : <></>}
                <p>Quinta-feira - 15:00</p>
            </div>
        </div>
    )
}