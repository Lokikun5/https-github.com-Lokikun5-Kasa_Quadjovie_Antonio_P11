import '../styles/header.scss'
import logo from '../assets/LOGO.svg'
function Header () {
    return (<header>
        <img src={logo} alt='logo Kasa' />
        <nav>
            <ul>
                <li>
                    <a href="/home">Accueil</a>
                </li>
                <li>
                    <a href="/about">A Propos</a>
                </li>
            </ul>
        </nav>
    </header>)

}

export default Header