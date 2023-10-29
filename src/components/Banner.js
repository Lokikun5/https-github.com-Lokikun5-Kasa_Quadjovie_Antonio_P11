import '../styles/banner.scss';

function Banner ({titleH1,src}) {
    return (<section className='banner-layout'>
            <img src={src} alt="Kasa image"/>
            <h1>{titleH1}</h1>
    </section>
        )
}

export default Banner