import { Col, Container, Row } from 'react-bootstrap'
import styles from './Clients.module.scss'
import noviexarImg from './../../img/partners/noviexar.png'
import skywaveImg from './../../img/partners/skywave.png'
import nexacoreImg from './../../img/partners/nexacore.png'
import elitexcelImg from './../../img/partners/elitexcel.png'
import zenithronImg from './../../img/partners/zenithron.png'
import ennovatekImg from './../../img/partners/ennovatek.png'
import infinitumixImg from './../../img/partners/infinitumix.png'
import spectrafuseImg from './../../img/partners/spectrafuse.png'

const Clients = () => {
    return (
        <section className={styles.clients}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.clients__header}>
                            <h2>Our Clients</h2>
                        </div>
                        <Col className="d-flex text-center justify-content-center flex-wrap">
                            <Col xl="3" md="6" sm="12">
                                <a href="#!" className={styles.clients__link}>
                                    <img src={noviexarImg} alt="" width={184} />
                                </a>
                            </Col>
                            <Col xl="3" md="6" sm="12">
                                <a href="#!" className={styles.clients__link}>
                                    <img src={skywaveImg} alt="" width={184} />
                                </a>
                            </Col>
                            <Col xl="3" md="6" sm="12">
                                <a href="#!" className={styles.clients__link}>
                                    <img src={nexacoreImg} alt="" width={184} /> 
                                </a> 
                            </Col>
                            <Col xl="3" md="6" sm="12">
                                <a href="#!" className={styles.clients__link}>
                                    <img src={elitexcelImg} alt="" width={184} />
                                </a>
                            </Col>
                        </Col>
                        <Col className="d-flex text-center justify-content-center flex-wrap">
                            <Col xl="3" md="6" sm="12">
                                <a href="#!" className={styles.clients__link}>
                                    <img src={zenithronImg} alt="" width={184} />
                                </a>
                            </Col>
                            <Col xl="3" md="6" sm="12">
                                <a href="#!" className={styles.clients__link}>
                                    <img src={ennovatekImg} alt="" width={184} />
                                </a>
                            </Col>
                            <Col xl="3" md="6" sm="12">
                                <a href="#!" className={styles.clients__link}>
                                    <img src={infinitumixImg} alt="" width={184} />
                                </a>
                            </Col>
                            <Col xl="3" md="6" sm="12">
                                <a href="#!" className={styles.clients__link}>
                                    <img src={spectrafuseImg} alt="" width={184} />
                                </a>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
 
export default Clients