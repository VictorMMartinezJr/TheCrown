import './App.css'
import Main from './components/Sections/Main';
import AboutUs from './components/Sections/AboutUs/AboutUs';
import { useEffect } from 'react';
import Cards from './components/Sections/Cards/Cards';
import Reviews from './components/Sections/Reviews/Reviews';
import Footer from './components/Sections/Footer/Footer';
import Menu from './components/Sections/Menu/Menu';
import WhyUs from './components/Sections/WhyUs/WhyUs';
import AOS from 'aos';
import 'aos/dist/aos.css'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <>
      <Main />
      <Cards />
      <AboutUs />
      <WhyUs />
      <Menu />
      <Reviews />
      <Footer />
    </>
  )
}

export default App;
