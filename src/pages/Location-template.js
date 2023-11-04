import '../styles/location.scss'
import {useParams} from "react-router-dom";
import data from '../data/logements.json';
import Slider from '../components/Slider';
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
function LocationTemplate () {
    const {id} = useParams();
    const locationData = data.find(item => item.id === id);
    const hostName = locationData.host.name;
    const hostPicture = locationData.host.picture;
    const equipments = locationData.equipments;
    const tags = locationData.tags;
    const imgs = locationData.pictures;
    const locationRating = locationData.rating;
    return <div>
                <div className="main">
                    <Header />
                        <div className="location-page">
                            <Slider pictures={imgs} alt={locationData.title}/>
                            <div className="location-container">
                                <div className="location-display">
                                    <div className="bloc1">
                                        <div className="location-info">
                                            <h1>{locationData.title}</h1>
                                            <p>{locationData.location}</p>
                                        </div>
                                        <div className="tags">
                                            {tags.map((tag,index) => (
                                                <li key={index}>{tag}</li>
                                            ))
                                            }
                                        </div>
                                    </div>

                                    <div className="user">
                                        <div className="user-info"><p>{hostName}</p> <img src={hostPicture} alt={hostName} /></div>
                                        <Rating rat={locationRating} />
                                    </div>
                                </div>
                            </div>
                                <div className="dropdown-section">
                                    <div className="dropdown-wrapper">
                                        <Dropdown title={'Description'} content={locationData.description}/>
                                    </div>
                                    <div className="dropdown-wrapper">
                                        <Dropdown title={'Equipements'}
                                                  content={
                                                      <ul>
                                                          {equipments.map((equipment, index) => (
                                                              <li key={index}>{equipment}</li>
                                                          ))}
                                                      </ul>
                                                  } />
                                    </div>
                                </div>
                        </div>
                </div>
        <Footer/>
    </div>
}
export default LocationTemplate