import './AboutUs.css';
import flour from '../images/flour.png';
import sidefire from '../images/side-fire.png'
const img = 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';

const AboutUs = () => {
    return (
        <section className='aboutus-container' id='about'>
            <div className='about-aos' data-aos='fade-up'>
                <img className='side-fire' src={sidefire} alt="side-fire" />
                <div className="aboutus-content">
                    <div className='aboutus-info' >
                        <h1>About Us</h1>
                        <p className='aboutus-p'>The Smoking Grill's mission is to give our customers a place to celebrate life’s special moments by offering the best food, service, and ambiance. The smile on our customers face has always been our first priority and we work hard to achieve that. </p>
                        <p>Established in 1982, We aim to keep going forever and bring happiness to your life.</p>
                    </div>
                    <div className='aboutus-images'>
                        <img className='aboutus-img' src={img} alt="serving" />
                        <img className='aboutus-flour' src={flour} alt="flour" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
