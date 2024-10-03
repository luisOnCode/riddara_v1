import './Banner.css'
import bg_video from "../../../media/videos/banner-principal.webm"
import rd6_logo from "../../../media/imgs/rd6/logo.svg"

function Banner() {
    return (
        <section id="banner-container">
            <video autoPlay loop muted>
                <source src={bg_video} type="video/webm" />
            </video>
            <div id="banner-text">
                <img src={rd6_logo} alt="Riddara RD6" />
                <h2>Mais Que Uma Pickup.</h2>
            </div>
        </section>
    )
}

export default Banner;