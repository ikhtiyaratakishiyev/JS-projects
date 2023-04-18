
import {createBrowserRouter} from 'react-router-dom'
import MainPage from '../Pages/MainPage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'



export const router = createBrowserRouter([
   {
    path:  '/',
    element: <MainPage/>
   }, {
    path:  '/about',
    element: <AboutPage/>
   },
   {
    path:  '/contact',
    element: <ContactPage/>
   }
])


