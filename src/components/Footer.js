import '../styles/footer.scss'
import logoFooter from '../assets/LOGOFOOTER.png'
function Footer (){
    const CopyrightTxt = '© 2020 Kasa. All rights reserved'
    return(
        <footer>
            <img src={logoFooter} alt='logo Kasa pied de page'/>
            <span>{CopyrightTxt}</span>
        </footer>
    )
}
export default Footer