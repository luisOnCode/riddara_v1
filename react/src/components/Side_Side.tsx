import './Side_Side.css'
import left_img from "../../../media/imgs/rd6/interior/interior-01.webp"
import right_img from "../../../media/imgs/rd6/exterior/exterior-03.jpeg"


function Side_Side() {
    return (
        <section id="side_by_side-container">
        <div id="left-section" className="side_by_side-section">
            <img src={left_img} alt="Interior-01" />
            <div>
                <p className="text-left">Equipada com inteligência e conforto</p>
            </div>
        </div>
        <div id="right-section" className="side_by_side-section">
            <img src={right_img} alt="Exterior-03" />
            <div>
                <p className="text-right">Design pensado na sua imaginação</p>
            </div>
        </div>
    </section>
    )
}

export default Side_Side;