import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import bannerHomPage from "../assets/Mask Group.png";
function HomePage (){
    return <div>
        <div className="main"><Header />
            <Banner src={bannerHomPage} alt={'Kasa image'} titleH1={"Chez vous, partout et ailleurs"}/>
            <Gallery /></div>
        <Footer/></div>

}
export default HomePage