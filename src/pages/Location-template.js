import '../styles/location.scss'
import {useParams} from "react-router-dom";

function LocationTemplate () {
    const {id} = useParams()
    return <div>test id {id}</div>
}
export default LocationTemplate