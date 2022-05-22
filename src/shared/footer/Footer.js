import styled from "styled-components";

export default function Footer({ srcImage, movieName, weekday, showtime }) {
    return (
        <Footers>
            <FooterImage>
                <img src={srcImage} alt="movie-footer" />
            </FooterImage>
            <FooterText>
                <p>{movieName}</p>
                {weekday ? <p>{weekday} - {showtime}</p> : <></>}
            </FooterText>
        </Footers>
    )
}

const Footers = styled.footer`
    width: 100vw;
    height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
`

const FooterImage = styled.div`
    width: 64px;
    height: 89px;
    margin: 14px 10px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
       width: 48px;
       height: 72px;
    }   
`

const FooterText = styled.div`
    margin-left: 4px;

    p{
        margin-bottom: 0;
        color: #293845;
        font-size: 26px;
    }
`