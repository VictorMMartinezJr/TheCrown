import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const burgerClicked = () => {
        setIsNavOpen(!isNavOpen);
    }



    return (
        <nav className='navbar'>
            <img onClick={() => window.scroll(0, 0)} src="https://d33wubrfki0l68.cloudfront.net/deafe47e0ea96b853fe7b4131a5674263f601ec2/1d342/assets/img/crown.png" alt="logo" />
            <ul className={isNavOpen ? 'navbar-links active' : 'navbar-links'}>
                <li className='navbar-link'><a href='/'>Home</a></li>
                <li className='navbar-link'><a href='#menu' onClick={() => setIsNavOpen(false)}>Menu</a></li>
                <li className='navbar-link'><a href='#about' onClick={() => setIsNavOpen(false)}>About us</a></li>
            </ul>
            <div className='burger' onClick={burgerClicked}>
                <div className={isNavOpen ? 'toggle line1' : 'line1'}></div>
                <div className={isNavOpen ? 'toggle line2' : 'line2'}></div>
                <div className={isNavOpen ? 'toggle line3' : 'line3'}></div>
            </div>
        </nav>
    )
}

export default Navbar;
