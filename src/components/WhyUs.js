import './WhyUs.css';
import spice from '../images/spice.jpg'

const WhyUs = () => {
    return (
        <section className='whyus-container' id='about'>
            <div className='about-aos' data-aos='fade-up'>
                <div className="whyus-content" style={{ backgroundImage: `url(${spice})` }}>
                    <h1 className='whyus-title'>Why choose us?</h1>
                    <div className='whyus-cards'>
                        <div className='whyus-card' >
                            <i class="fas fa-seedling"></i>
                            <h1>Fresh Food</h1>
                            <p className='whyus-p'>We pride on serving fresh food</p>
                        </div>
                        <div className='whyus-card' >
                            <i class="fas fa-dollar-sign"></i>
                            <h1>Best Prices</h1>
                            <p className='whyus-p'>Unbeatable prices for unbeatable quality</p>
                        </div>
                        <div className='whyus-card' >
                            <i class="fas fa-shipping-fast"></i>
                            <h1>Fast Delivery</h1>
                            <p className='whyus-p'>Our delivery van gets you your food quick</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
