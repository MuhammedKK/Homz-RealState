import './Hero.css'
import  {FaLocationDot}  from "react-icons/fa6";
import CountUp from 'react-countup';


const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div id="hero-container" className="flexCenter paddings innerWidth">
            <div className="flexColStart hero-content">
                <div className="hero-title">
                    <div className="orange-circle"></div>
                    <h1>Discover <br /> Most Suitable Property</h1>
                </div>
                <div className="flexColStart hero-desc">
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum similique molestiae culpa, quae commodi incidunt rerum aliquid consectetur nemo porro, dolor iusto fuga autem animi voluptatem, aspernatur ducimus blanditiis id.</span>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum similique molestiae culpa, quae commodi incidunt rerum aliquid consectetur nemo porro, dolor iusto fuga autem animi voluptatem, aspernatur ducimus blanditiis id.</span>

                </div>
                <div className="search-bar">
                    <div className="search-container">
                        <FaLocationDot style={{
                            position: 'absolute',
                            fontSize: '1.5rem',
                            top: '15%',
                            left: '1%',
                            color: 'var(--primary)'
                        }} />
                        <input type="text"/>
                        <button>Search</button>
                    </div>
                </div>
                <div className="flexCenter stats">
                    <div className="stat">
                        <span>
                            <CountUp start={8200} end={9000} duration={2} />
                        </span>
                        <span>+</span>
                        <div>premuim Products</div>
                    </div>
                    <div className="stat">
                        <span>
                            <CountUp start={7200} end={8000} duration={2} />
                        </span>
                        <span>+</span>
                        <div>premuim Products</div>
                    </div>
                    <div className="stat">
                        <span>
                            <CountUp start={1200} end={2000} duration={2} />
                        </span>
                        <span>+</span>
                        <div>premuim Products</div>
                    </div>
                    <div className="stat">
                        <span>
                            <CountUp start={3200} end={7800} duration={2} />
                        </span>
                        <span>+</span>
                        <div>premuim Products</div>
                    </div>
                </div>
            </div>
            <div className="flexCenter hero-background">
                <div className="img-container">
                    <img src="./hero-image.png" alt="Hero Image"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
