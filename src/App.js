import './App.css'
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Cards from './components/Cards';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Menu from './components/Menu';
import WhyUs from './components/WhyUs';


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
