import '../styles/slider.scss'
function Slider ({ src, alt }) {
    return <div className="slider-container">
        <img src={src} alt={alt} />
    </div>
}

export default Slider