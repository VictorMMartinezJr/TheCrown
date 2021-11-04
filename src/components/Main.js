import Navbar from "./Navbar";
import './Main.css';

const Main = () => {

    return (
        <section className='main-container'>
            <Navbar />
            <div className='main-content'>
                <div className='aos' data-aos='fade-up'>
                    <h1 className='main-title'>Delicious Food</h1>
                    <p className='main-subtitle'>Crown is a restaurant, bar, and coffee<br></br>roastery located in Atlanta, Ga
                    </p>
                    <div className='arrow-container'>
                        <button className='main-btn'>Order Online</button>
                        <i className="fas fa-long-arrow-alt-down main-arrow"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
