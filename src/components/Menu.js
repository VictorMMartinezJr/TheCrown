import './Menu.css';
import leaves from '../images/leaves.png'
import menuBurger from '../images/menu-burger.jpg';
import cheeseStick from '../images/cheese-sticks.jpg';
import meats from '../images/meats.jpg';
import dessert from '../images/dessert.jpg';
import beer from '../images/beer.jpg';
import soda from '../images/soda.jpg';

const Menu = () => {
    return (
        <section className='menu-container' id='menu'>
            <div className='menu-leaves' style={{ backgroundImage: `url('${leaves}')` }}></div>
            <div className='menu-leaves hidden' style={{ backgroundImage: `url('${leaves}')` }}></div>
            <div className='menu-items' data-aos='fade-up'>
                <div className='menu-item'>
                    <img className='menu-item-img' src={cheeseStick} alt="cheese-stick" />
                    <div className='menu-item-bottom'>
                        <h1>Appetizers</h1>
                    </div>
                </div>
                <div className='menu-item'>
                    <img className='menu-item-img' src={menuBurger} alt="menu-burger" />
                    <div className='menu-item-bottom'>
                        <h1>Burgers</h1>
                    </div>
                </div>
                <div className='menu-item'>
                    <img className='menu-item-img' src={meats} alt="meats" />
                    <div className='menu-item-bottom'>
                        <h1>Meats</h1>
                    </div>
                </div>

                <div className='menu-item'>
                    <img className='menu-item-img' src={dessert} alt="dessert" />
                    <div className='menu-item-bottom'>
                        <h1>Desserts</h1>
                    </div>
                </div>
                <div className='menu-item'>
                    <img className='menu-item-img' src={beer} alt="beer" />
                    <div className='menu-item-bottom'>
                        <h1>Alcoholic Drinks</h1>
                    </div>
                </div>
                <div className='menu-item'>
                    <img className='menu-item-img soda' src={soda} alt="soda" />
                    <div className='menu-item-bottom'>
                        <h1>Fountain Drinks</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
