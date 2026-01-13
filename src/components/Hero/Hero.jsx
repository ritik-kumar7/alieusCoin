import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroImage from '../../assets/images/newImages/card-3.jpeg';
import bgPattern from '../../assets/images/shapes/shape_net_ico_hero_section_bg.svg';
import shapeGlobe from '../../assets/images/shape_globe.webp';
import shapeCoin from '../../assets/images/shape_coin.webp';
import bottomShape from '../../assets/images/shapes/shape_ico_hero_section_bottom.webp';

const Hero = () => {
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${bgPattern})` }}>
            <div className="hero-bg-shapes">
                <div className="shape-globe">
                    <img src={shapeGlobe} alt="" loading="lazy" />
                </div>
                <div className="shape-coin">
                    <img src={shapeCoin} alt="" loading="lazy" />
                </div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-subtitle">Welcome to Alieus Coin —</span>
                        <h1 className="hero-title">
                            World's First Hedge Fund Backed <span className="text-highlight">Crypto Currency</span>
                        </h1>
                        <p className="hero-description">
                            Alieus Coin (AHF2) isn't just a digital currency — it's the world's first hedge fund–backed cryptocurrency designed for real-world use. From AI agents and real estate to metaverse access and global payments, AHF2 powers a complete ecosystem built for the future.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/login" className="btn-primary">
                                Buy Now
                            </Link>
                            <a
                                href="https://bscscan.com/token/0xf4b84ae679a8a69aa4d0395a029c0503cad6c2fb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline"
                            >
                                Explorer
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-wrapper">
                            <img src={heroImage} alt="Alieus Coin Hero" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-bottom-shape">
                <img src={bottomShape} alt="" loading="lazy" />
            </div>
        </section>
    );
};

export default Hero;
