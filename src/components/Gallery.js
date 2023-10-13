import '../styles/gallery.scss'
import imgTest from '../assets/ImgGal.png'
function Gallery (){
    const location = 'Titre de la location'
    return<div className='gallery-layout'>
        <div className="gallery-container">
            <article>
                <img src={imgTest} alt='maison'/>
                <span className="location">{location}</span>
            </article>
            <article>
                <img src={imgTest} alt='maison'/>
                <span className="location">{location}</span>
            </article>
        </div>
    </div>
}

export default Gallery