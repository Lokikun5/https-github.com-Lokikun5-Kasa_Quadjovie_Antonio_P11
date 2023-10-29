import {createBrowserRouter, RouterProvider} from "react-router-dom";
import '../styles/App.scss';
import About from "../pages/About";
import NotFound from "../pages/Not-found";
import LocationTemplate from "../pages/Location-template";
import bannerHomPage from "../assets/Mask Group.png"
import HomePage from "../pages/HomePage";
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,

    errorElement: <NotFound/>
  },
  {
    path: 'about',
    element: <About/>
  },
  {
    path: 'not-found',
    element: <NotFound/>
  },
  {
    path: 'location',
    element: <LocationTemplate/>
  },
  {
    path: 'location/:id',
    element: <LocationTemplate/>,
    errorElement: <NotFound/>
  }
])
function App() {
  return <RouterProvider router={router}/>
}

export default App;
