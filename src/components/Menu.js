import './Menu.css';
import menuBurger from './images/menu-burger.jpg'

const Menu = () => {
    return (
        <section className='menu-container' id='menu'>
            <div className='menu-items' data-aos='fade-up'>
                <div className='menu-item'>
                    <img src={menuBurger} alt="" />
                    <h1>Appetizers</h1>
                </div>
                <div className='menu-item'>
                    <img src="" alt="" />
                    <h1>Burgers</h1>
                </div>
                <div className='menu-item'>
                    <img src="" alt="" />
                    <h1>Meats</h1>
                </div>

                <div className='menu-item'>
                    <img src="" alt="" />
                    <h1>Alcoholic Beverages</h1>
                </div>
                <div className='menu-item'>
                    <img src="" alt="" />
                    <h1>Fountain Drinks</h1>
                </div>
                <div className='menu-item'>
                    <img src="" alt="" />
                    <h1>Desserts</h1>
                </div>
            </div>
        </section>
    )
}

export default Menu
