import './Reviews.css'

const Reviews = () => {
    return (
        <section className='review-container'>
            <h1 data-aos='fade-up'>Reviews</h1>
            <div className='reviews' data-aos='fade-up'>
                <div className='review'>
                    <i className="fas fa-quote-right"></i>
                    <p>This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone!</p>
                    <div className='review-name'>
                        <h2>Selena D</h2>
                        <h3>OpenTable</h3>
                    </div>
                </div>

                <div className='review'>
                    <i className="fas fa-quote-right"></i>
                    <p>It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.</p>
                    <div className='review-name'>
                        <h2>Ashley</h2>
                        <h3>Yelp</h3>
                    </div>
                </div>

                <div className='review'>
                    <i className="fas fa-quote-right"></i>
                    <p>This is my absolute favorite restaurant in Atlanta. The food is always fantastic and no matter what I order I am always delighted with my meal! Servers are also great and always efficient, happy and polite.</p>
                    <div className='review-name'>
                        <h2>Josh</h2>
                        <h3>Zagat</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews

