import '../styles/header.scss'
import logo from '../assets/LOGO.svg'
import {NavLink} from "react-router-dom";
function Header () {
    return (<header>
        <img src={logo} alt='logo Kasa' />
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/about">A Propos</NavLink>
                </li>
            </ul>
        </nav>
    </header>)

}

export default Header