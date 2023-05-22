import { Col, Container, Row } from "react-bootstrap"
import styles from './Global.module.scss'
import Buttons from "../button/Buttons"
import starImg from './../../img/icons/star.svg'
import girlImg from './../../img/global/girl.png'
import DemoBtn from "../demo-btn/DemoBtn"

const Global = () => {
    return (
        <section className={styles.global}>
            <Container>
                <Row>
                    <Col className="d-flex align-items-center flex-wrap">
                        <Col xl="6" md="12" sm="12">
                            <div className={styles.global__text}>
                                <h1 className={styles.global__title}>Everything you need to scale a <span>global team</span></h1>
                                <div className={styles.global__subtitle}>Check out our proven methods, guides, and exercises that help make work better, and people happier.</div>
                                <div className="global__links d-flex gap-4 align-items-center">
                                    <Buttons title={"Learn more"} />
                                    <DemoBtn />
                                </div>
                                <div className={styles.global__rate}>
                                    <span>Trusted by over than 1M customers</span>
                                    <div className={styles.global__stars}>
                                        <img src={starImg} alt="starImg" />
                                        <img src={starImg} alt="starImg" />
                                        <img src={starImg} alt="starImg" />
                                        <img src={starImg} alt="starImg" />
                                        <img src={starImg} alt="starImg" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl="6" md="12" sm="12">
                            <div className={styles.global__container}>
                                <div className={styles.global__img}>
                                    <img src={girlImg} alt="Girl" className={styles.global__girl} />
                                </div>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
 
export default Global