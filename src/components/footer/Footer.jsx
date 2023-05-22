import { Col, Container, Row } from 'react-bootstrap'
import styles from './Footer.module.scss'
import logoImg from './../../img/icons/logo.png'
import instagramLogo from './../../img/socials/instagram.svg'
import facebookLogo from './../../img/socials/Facebook.svg'
import twitterLogo from './../../img/socials/twitter.svg'
import linkedInLogo from './../../img/socials/linkedin.svg'
import mailImg from './../../img/footer/mail.svg'
import phoneImg from './../../img/footer/phone.svg'
import locationImg from './../../img/footer/location.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.footer__content}>
                            <Col xl="4" md="12" sm="12">
                                <div className={styles.footer__info}>
                                    <a href="#!" className={styles.footer__logo}>
                                        <img src={logoImg} alt="Logo" />
                                    </a>
                                    <div className={styles.footer__desc}>
                                        We love working with ambitious people. 
                                        Let's build something great together now.
                                    </div>
                                    <div className={styles.footer__socials}>
                                        <a href="#!" className={styles.footer__socialsLink}><img src={instagramLogo} alt="Insta" /></a>
                                        <a href="#!" className={styles.footer__socialsLink}><img src={facebookLogo} alt="Facebook" /></a>
                                        <a href="#!" className={styles.footer__socialsLink}><img src={twitterLogo} alt="Twitter" /></a>
                                        <a href="#!" className={styles.footer__socialsLink}><img src={linkedInLogo} alt="LinkedIn" /></a>
                                    </div>
                                </div>
                            </Col>
                            <Col xl="8" md="12" sm="12" className="d-flex gap-5 flex-wrap">
                                <div className={styles.footer__column}>
                                    <ul className={styles.footer__list}>
                                        <h5>Product</h5>
                                        <li><a href="#!" className={styles.footer__link}>Pricing</a></li>
                                        <li><a href="#!" className={styles.footer__link}>Case Studies</a></li>
                                        <li><a href="#!" className={styles.footer__link}>Features</a></li>
                                        <li><a href="#!" className={styles.footer__link}>Reviews</a></li>
                                        <li><a href="#!" className={styles.footer__link}>Updates</a></li>
                                    </ul>
                                </div>
                                <div className={styles.footer__column}>
                                    <ul className={styles.footer__list}>
                                        <h5>Company</h5>
                                        <li><a href="#!" className={styles.footer__link}>About</a></li>
                                        <li><a href="#!" className={styles.footer__link}>Careers</a></li>
                                        <li><a href="#!" className={styles.footer__link}>News</a></li>
                                        <li><a href="#!" className={styles.footer__link}>Blog</a></li>
                                        <li><a href="#!" className={styles.footer__link}>Contact</a></li>
                                    </ul>
                                </div>
                                <div className={styles.footer__column}>
                                    <ul className={styles.footer__list}>
                                        <h5>Support</h5>
                                        <li><a href="#!" className={styles.footer__link}>Help Center</a></li>
                                        <li><a href="#!" className={styles.footer__link}>Status</a></li>
                                        <li><a href="#!" className={styles.footer__link}>Report a Bug</a></li>
                                        <li><a href="#!" className={styles.footer__link}>Chat Support</a></li>
                                    </ul>
                                </div>
                                <div className={styles.footer__column}>
                                    <ul className={styles.footer__list}>
                                        <h5>Contact us</h5>
                                        <li>
                                            <img src={mailImg} alt="Mail" />
                                            <a href="#!" className={styles.footer__link}>hello@whitespaceui.design</a>
                                        </li>
                                        <li>
                                            <img src={phoneImg} alt="Phone" />
                                            <a href="#!" className={styles.footer__link}>+1 (500) 300 250</a>
                                        </li>
                                        <li>
                                            <img src={locationImg} alt="Location" />
                                            <a href="#!" className={styles.footer__link}>3891 Ranchview <br></br> Dr. Richardson, CA 62639</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </div>
                        <div className={styles.footer__copyright}>
                            <span>© 2023 Whitespace UI - All rights reserved</span>
                            <div className={styles.footer__copyrightLinks}>
                                <a href="#!" className={styles.footer__copyrightLink}>Terms of Service</a>
                                <a href="#!">Privacy Policy</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
 
export default Footer