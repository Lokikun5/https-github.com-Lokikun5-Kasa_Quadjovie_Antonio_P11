import '../styles/about.scss'
import arrow from '../assets/arrow_back_ios-24px.svg'
function About () {
    const info = [
        'Fiabilité',
        'Respect',
        'Service',
        'Sécurité'
    ]
    return <div className="dropdown-container">
        {info.map((item)=>(
            <div className='dropdown'>
                <p key={item}> {item}</p>
                <img src={arrow} alt="la fleche"></img>
            </div>
            )
        )}
    </div>
}

export default About