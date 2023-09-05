
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Контакты</h5>
                        <ul className="list-unstyled">
                            <li>Email 1: example1@example.com</li>
                            <li>Email 2: example2@example.com</li>
                            <li>Email 3: example3@example.com</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Адрес</h5>
                        <p>1234 Улица, Город, Страна</p>
                    </Col>
                    <Col md={4}>
                        <h5>Социальные сети</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </li>
                            {/* Добавьте другие ссылки на социальные сети по аналогии */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
