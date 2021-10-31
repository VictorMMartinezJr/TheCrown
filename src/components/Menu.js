import './Menu.css';

const Menu = () => {
    return (
        <section className='menu-container' id='menu'>
            <div className='menu-items' data-aos='fade-up'>
                <div className='menu-item appetizers'>
                    <h1>Appetizers</h1>
                </div>
                <div className='menu-item burgers'>
                    <h1>Burgers</h1>
                </div>
                <div className='menu-item meats'>
                    <h1>Meats</h1>
                </div>

                <div className='menu-item alc-drinks'>
                    <h1>Alcoholic Beverages</h1>
                </div>
                <div className='menu-item reg-drinks'>
                    <h1>Fountain Drinks</h1>
                </div>
                <div className='menu-item dessert'>
                    <h1>Desserts</h1>
                </div>
            </div>
        </section>
    )
}

export default Menu
