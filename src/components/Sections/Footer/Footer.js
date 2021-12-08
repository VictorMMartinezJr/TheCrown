import './Footer.css';
import { useState } from 'react';

const logo = "https://d33wubrfki0l68.cloudfront.net/deafe47e0ea96b853fe7b4131a5674263f601ec2/1d342/assets/img/crown.png";

const Footer = () => {
    const [email, setEmail] = useState('');

    return (
        <section className='footer'>
            <div className='footer-email'>
                <div className='aos' data-aos='fade-up'>
                    <img src={logo} alt="logo" />
                    <h2>STAY UPDATED FOR NEWS & OFFERS!</h2>
                    <form className='footer-form'>
                        <input className='footer-input' value={email} type="email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
                        <button className='footer-input footer-btn' onClick={(e) => {
                            e.preventDefault();
                            setEmail('')
                        }}>Submit</button>
                    </form>
                </div>
            </div>
            <div className='footer-info'>
                <div className='footer-location' data-aos='fade-up'>
                    <h1 className='footer-h1'>LOCATION</h1>
                    <p>36 Mill St Atlanta, GA 30060</p>
                </div>
                <div className='footer-socials' data-aos='fade-up'>
                    <h1 className='footer-h1'>AROUND THE WEB</h1>
                    <div className='social-icons'>
                        <i className="fab fa-facebook icon1"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-google-plus-g icon"></i>
                    </div>
                </div>
                <div className='footer-support' data-aos='fade-up'>
                    <h1>Support</h1>
                    <p>Contact</p>
                    <p className='support-p'>Careers</p>
                    <p className='support-p'>FAQ</p>
                </div>
            </div>
            <div className='footer-copyright'>
                <span>
                    <i className="far fa-copyright"></i>
                    <p>2021 VictorMtzCodes</p>
                </span>
            </div>
        </section>
    )
}

export default Footer
