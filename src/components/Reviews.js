import './Reviews.css';
import fire from '../images/fire.png';
import mint from '../images/mint.png';
import burger from '../images/burger.png';

const Reviews = () => {
    return (
        <section className='review-container'>
            <h1 data-aos='fade-up'>What people say about us</h1>
            <div className='reviews' data-aos='fade-up'>
                <div className='review'>
                    <div className='review-header'>
                        <h2>Selena D</h2>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone!</p>
                    <h3>OpenTable</h3>
                    <img className='review-img' src={burger} alt="burger" />
                </div>

                <div className='review'>
                    <div className='review-header'>
                        <h2>Ashley</h2>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.</p>
                    <h3>Yelp</h3>
                    <img className='review-img' src={fire} alt="fire" />
                </div>

                <div className='review'>
                    <div className='review-header'>
                        <h2>Josh</h2>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>This is my absolute favorite restaurant in Atlanta. The food is always fantastic and no matter what I order I am always delighted with my meal! Servers are also great and always efficient, happy and polite.</p>
                    <h3>Zagat</h3>
                    <img className='review-img' src={mint} alt="mint" />
                </div>
            </div>
        </section>
    )
}

export default Reviews

