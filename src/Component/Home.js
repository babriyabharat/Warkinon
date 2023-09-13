import React from "react";
import '../Component/Home.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Image/Logo.png';
import Banner from '../Image/Banner.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Companie1 from '../Image/Companie1.png';
import Companie2 from '../Image/Companie2.png';
import Companie3 from '../Image/Companie3.png';
import Companie4 from '../Image/Companie4.png';
import Companie5 from '../Image/Companie5.png';
import Companie6 from '../Image/Companie6.png';
import About from '../Image/About.png';
import Feature1 from '../Image/Feature1.png';
import Bussiness from '../Image/Bussiness.png';
import Portfolio1 from '../Image/Portfolio1.png';
import Portfolio2 from '../Image/Portfolio2.png';
import Portfolio3 from '../Image/Portfolio3.png';
import Portfolio4 from '../Image/Portfolio4.png';
import Testimonial from '../Image/Testimonial.png';

function Home() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerpadding: "100px",
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            {/* <section className='header '>
                <div className='container header-menu d-flex'>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='text-end'>
                            <Nav className="menu me-auto">
                                <Nav.Link href="#home" className='fs-6 a'>Home</Nav.Link>
                                <Nav.Link href="#About" className='fs-6 a'>About Us</Nav.Link>
                                <Nav.Link href="#Service" className='fs-6 a'>Service</Nav.Link>
                                <Nav.Link href="#Project" className='fs-6 a'>Project</Nav.Link>
                                <Nav.Link href="#Contact" className='fs-6 a'>Contact Us</Nav.Link>
                            </Nav>
                            <div className='header-btn'>

                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </section> */}
            <section className="header">
                <div className="container header-menu">
                    <Navbar>
                        <Navbar.Brand href="#home"><img src={Logo} alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="menu me-auto">
                                <Nav.Link href="#home" className='fs-6 a'>Home</Nav.Link>
                                <Nav.Link href="#link" className='fs-6 a'>Case Studies</Nav.Link>
                                <Nav.Link href="#home" className='fs-6 a'>Blog</Nav.Link>
                                <Nav.Link href="#link" className='fs-6 a'>Service</Nav.Link>
                                <Nav.Link href="#link" className='fs-6 a'>Contant</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <div>
                            <button type="button" class="btn">Contact</button>
                        </div>
                    </Navbar>
                </div>
            </section>
            <section className="banner">
                <div className="container">
                    <div className="banner-info d-flex">
                        <div className="banner-contant col-6">
                            <h1>The Better Way<br /> To <span>Success</span> In<br /> Your Business</h1>
                            <p>I seek to push the limits of creativity to create high-engaging,<br /> user-friendly, and memorable interactive experiences.</p>
                            <div>
                                <button type="button" class="btn">HIRE ME</button>
                            </div>
                        </div>
                        <div className="banner-image col-6">
                            <img src={Banner} alt="Banner" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="companie">
                <div className="container">
                    <div className="companie-title text-center mb-5">
                        <h5>Trusted by the world's best companies</h5>
                    </div>
                    <div className="companie-image">
                        <Slider {...settings}>
                            <div>
                                <img src={Companie1} alt="Companie1" />
                            </div>
                            <div>
                                <img src={Companie2} alt="Companie2" />
                            </div>
                            <div>
                                <img src={Companie3} alt="Companie3" />
                            </div>
                            <div>
                                <img src={Companie4} alt="Companie4" />
                            </div>
                            <div>
                                <img src={Companie5} alt="Companie5" />
                            </div>
                            <div>
                                <img src={Companie6} alt="Companie6" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <div className="about-info d-flex">
                        <div className="about-image col-6">
                            <img src={About} alt="About" />
                        </div>
                        <div className="about-contant">
                            <h1>Let your visitors know<br /> about your features.</h1>
                            <p>We develop enjoyable consumer experiences, from<br /> digital strategy and content to media and analysis.<br /> Leading to meaningful results and satisfied clients.</p>
                            <div>
                                <button type="button" class="btn">Our Process</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature">
                <div className="container">
                    <div className="feature-title text-center">
                        <h1>I want company feature</h1>
                        <p>We believe scaling startups require a radically different kind of agency</p>
                    </div>
                    <div className="feature-image d-flex">
                        <div className="img col-4">
                            <img src={Feature1} alt="Feature1" />
                        </div>
                        <div className="img col-4">
                            <img src={Feature1} alt="Feature1" />
                        </div>
                        <div className="img col-4">
                            <img src={Feature1} alt="Feature1" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bussiness">
                <div className="container d-flex">
                    <div className="bussiness-contant col-6">
                        <h1>Peed Of Creative<br /> Service For Your<br /> Business Growth</h1>
                        <p>We recruit doctors with the best honors and graduates at their<br /> universities, with a very broad and extraordinary experience<br /> they grow into professional doctors</p>
                        <p>then received extraordinary supplies, guided for 2 years, they<br /> already understand very well about existing diseases and how<br /> to handle them properly</p>
                    </div>
                    <div className="Bussiness-image col-6">
                        <img src={Bussiness} alt="Bussiness" />
                    </div>
                </div>
            </section>
            <section className="portfolio">
                <div className="container">
                    <div className="portfolio-title">
                        <h1>Our Impressive Portfolio</h1>
                        <p>We believe scaling startups require a radically different kind of agency</p>
                    </div>
                    <div className="portfolio-image">
                        <div className="d-flex">
                            <div className="img w-50">
                                <img src={Portfolio1} alt="Portfolio1" />
                            </div>
                            <div className="img w-50">
                                <img src={Portfolio2} alt="Portfolio2" />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="img w-50">
                                <img src={Portfolio3} alt="Portfolio3" />
                            </div>
                            <div className="img w-50">
                                <img src={Portfolio4} alt="Portfolio4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial">
                <div className="container">
                    <div className="testimonial-title text-center">
                        <h1>Our Testimonial</h1>
                        <p>We believe scaling startups require a radically different kind of agency</p>
                    </div>
                    <div className="testimonial-image d-flex">
                        <div className="img col-4">
                            <img src={Testimonial} alt="Testimonial"/>
                        </div>
                        <div className="img col-4">
                            <img src={Testimonial} alt="Testimonial"/>
                        </div>
                        <div className="img col-4">
                            <img src={Testimonial} alt="Testimonial"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;