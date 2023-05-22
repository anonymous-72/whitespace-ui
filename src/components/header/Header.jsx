import React, { useState, useEffect } from 'react' 
import { Col, Container, Row } from "react-bootstrap"
import styles from './Header.module.scss'
import logoImg from './../../img/icons/logo.png'
import logoMiniImg from './../../img/icons/logo-mini.png'
import Buttons from "../button/Buttons"
import NavButton from "../nav-button/NavButton"

const Header = () => {
    const [isNavVisible, setNavVisible] = useState(false)

    const toggleNavVisibility = () => {
        console.log('Clicked')
        setNavVisible(!isNavVisible)
    }

    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 500)

    const handleResize = () => {
        setIsMobileView(window.innerWidth < 500)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <header className={styles.header}>
            <Container>
                <Row>
                    <Col>
                        <div className="header__content d-flex justify-content-between align-items-center flex-wrap">
                            <Col xl="2" md="4" sm="4">
                                <a href="#!" className={styles.header__logo}>
                                    <img src={isMobileView ? logoMiniImg : logoImg} alt="Logo" />
                                </a>
                            </Col>
                            <nav className={`header__nav d-flex align-items-center gap-4 xl-10 md-8 sm-8 flex-wrap ${isNavVisible ? styles.visible : styles.hidden}`}>
                                <ul className={`d-flex gap-4 flex-wrap`} id={styles.nav}>
                                    <li><a href="#!" className={styles.header__link}>Home</a></li>
                                    <li><a href="#!" className={styles.header__link}>Features</a></li>
                                    <li><a href="#!" className={styles.header__link}>About us</a></li>
                                    <li><a href="#!" className={styles.header__link}>News</a></li>
                                    <li><a href="#!" className={styles.header__link}>Contact</a></li>
                                </ul>
                                <div className={styles.header__btn}>
                                    <Buttons title={"Start now"} />
                                </div>
                                <div className="header__navBtn col-auto" id={styles.header__navBtn}>
                                    <NavButton onClick={toggleNavVisibility} />
                                </div>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
 
export default Header