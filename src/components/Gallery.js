import '../styles/gallery.scss'
import data from '../data/logements.json'
function Gallery (){

    return<div className='gallery-layout'>
        <div className="gallery-container">
            {data.map((item) => (
                <article key={item.id}>
                    <img src={item.cover} alt={item.title} />
                    <span className="location">{item.title}</span>
                </article>
            ))}
        </div>
    </div>
}

export default Gallery