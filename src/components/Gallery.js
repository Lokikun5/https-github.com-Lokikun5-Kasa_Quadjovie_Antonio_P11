import '../styles/gallery.scss'
import data from '../data/logements.json'
import {Link} from "react-router-dom";
function Gallery (){

    return<div className='gallery-layout'>
        <div className="gallery-container">
            {data.map((item) => (
                <article key={item.id}>
                    <Link to={`location/${item.id}`}>
                        <img src={item.cover} alt={item.title} />
                        <span className="location">{item.title}</span>
                    </Link>
                </article>
            ))}
        </div>
    </div>
}

export default Gallery