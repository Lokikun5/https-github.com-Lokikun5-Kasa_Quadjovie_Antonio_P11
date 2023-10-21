import {createBrowserRouter, RouterProvider} from "react-router-dom";
import '../styles/App.scss';
import Header from './Header';
import Banner from './Banner';
import Gallery from './Gallery';
import Footer from "./Footer";
import About from "../pages/About";
import NotFound from "../pages/Not-found";
import LocationTemplate from "../pages/Location-template";
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <div className="main"><Header />
        <Banner titleH1={"Chez vous, partout et ailleurs"}/>
        <Gallery /></div>
      <Footer/></div>,

    errorElement: <NotFound/>
  },
  {
    path: 'about',
    element: <div><div className="main"><Header />
      <Banner/><About/></div>
      <Footer/></div>
  },
  {
    path: 'not-found',
    element: <div><div className="main"><Header /><NotFound/></div><Footer/></div>
  },
  {
    path: 'location',
    element: <div><div className="main"><Header /><LocationTemplate/></div><Footer/></div>
  },
  {
    path: 'location/:id',
    element: <div><div className="main"><Header /><LocationTemplate/></div><Footer/></div>
  }
])
function App() {
  return <RouterProvider router={router}/>
}

export default App;
