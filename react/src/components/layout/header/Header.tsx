import './Header.css'
import riddaraLogo from "../../../../../media/imgs/riddara/logo-white.png"

function Header() {
    return (
        <header>
            <div id="header-main-div">
                <nav id="header-menu">
                    <ul>
                        <li id="contact">Contato</li>
                    </ul>
                </nav>
                <div id="header-logo-container">
                    <a id="header-logo-riddara" href="https://www.riddara.com/" target="_blank">
                        <img src={riddaraLogo} alt="logo-riddara-header" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;