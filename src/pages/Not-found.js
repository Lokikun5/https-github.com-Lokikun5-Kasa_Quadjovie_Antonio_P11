import '../styles/notFound.scss'
import notFoundImg from '../assets/404.png'
import {Link} from "react-router-dom";

function NotFound () {
    return <div className="container">
        <img src={notFoundImg} alt='introuvable'></img>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
}

export default NotFound