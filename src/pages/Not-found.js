import '../styles/notFound.scss'
import notFoundImg from '../assets/404.png'
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFound () {
    return <div><div className="main"><Header /><div className="container">
        <img src={notFoundImg} alt='introuvable'></img>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
    </div></div><Footer/></div>
}

export default NotFound