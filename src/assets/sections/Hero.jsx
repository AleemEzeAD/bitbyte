import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hero from "../images/index/hero2.webp";
import Hero2 from "../images/index/hero1.webp";
import Hero3 from "../images/index/hero3.webp";

const images = [Hero, Hero2, Hero3];

const MyHero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 5000); // 5 seconds per image

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="Hero">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="hero_text d-flex flex-column align-items-lg-start justify-content-lg-start align-items-center text-lg-start text-center">
                            <h1>Welcome to <span>BitByte Technologies</span></h1>
                            <p>
                                Empowering businesses with cutting-edge technology solutions.
                                Transform your ideas into reality with our innovative web, mobile, and software services.
                            </p>
                            <div className="d-flex">
                                <Link to="/about" className="hover1">
                                    Learn More <i className="fa-solid fa-arrow-up"></i>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="Opacity_Slider">
                            {images.map((img, index) => (
                                <figure
                                    key={index}
                                    className={index === current ? "active" : ""}
                                >
                                    <img src={img} alt={`Hero ${index + 1}`} />
                                </figure>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MyHero;
