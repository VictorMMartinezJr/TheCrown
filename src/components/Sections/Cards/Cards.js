import './Cards.css';

const Cards = () => {
    return (
        <section className='cards'>
            <div className='card card1' data-aos='fade-up'>
                <h1>Quality</h1>
                <p>We take pride in bringing you fresh, never frozen food, cooked just for you everytime</p>
                <button>Our Menu</button>
            </div>
            <div className='card card2' data-aos='fade-up'>
                <h1>Experience</h1>
                <p>With 30 years of experience, we strive to bring you a great experience</p>
                <button>Our Story</button>
            </div>
            <div className='card card3' data-aos='fade-up'>
                <h1>Delivery</h1>
                <p>Choose to deliver right to your door for great food in the comfort of your home</p>
                <button>Order Now</button>
            </div>

        </section>
    )
}

export default Cards



