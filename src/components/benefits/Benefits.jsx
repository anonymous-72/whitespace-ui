import { Col, Container, Row } from "react-bootstrap"
import styles from './Benefits.module.scss'
import BenefitsCard from "../benefits-card/BenefitsCard"
import tickIcon from './../../img/icons/tick.svg'
import mobileIcon from './../../img/icons/mobile.svg'
import mailOpenIcon from './../../img/icons/mail-open.svg'
import ben01Img from './../../img/benefits/ben-01.png'
import ben02Img from './../../img/benefits/ben-02.png'
import ben03Img from './../../img/benefits/ben-03.png'
import ben04Img from './../../img/benefits/ben-04.png'
import SectionHeader from "../section-header/SectionHeader"
import SectionHeaderSuptitle from "../section-header-suptitle/SectionHeaderSuptitle"

const Benefits = () => {
    return (
        <section className={styles.benefits}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.benefits__header}>
                            <SectionHeaderSuptitle suptitle={"Our Feature"} />
                            <SectionHeader 
                                title={"Our key benefits"} 
                                subtitle={"Our services are designed to cater to your specific needs and goals"}
                            />
                        </div>
                        <Col className="d-flex flex-wrap">
                            <Col xl="6" md="12" sm="12">
                                <div className={styles.benefits__desc}>
                                    <BenefitsCard 
                                        img={tickIcon} 
                                        title={"Project Structure"} 
                                        desc={"Check out our proven methods, guides, and exercises that help make work better, and people happier."}
                                    />
                                    <BenefitsCard 
                                        img={mobileIcon} 
                                        title={"Responsive"} 
                                        desc={"This Design System and UI kit is coming with full-responsive screens for tablet and mobile devices."}
                                    />
                                    <BenefitsCard 
                                        img={mailOpenIcon} 
                                        title={"Messaging"} 
                                        desc={"On mobile, customers can send text, or audio messages to agents, like using any messaging app."}
                                    />
                                </div>
                            </Col>
                            <Col xl="6" md="12" sm="12">
                                <div className="benefits__images d-flex justify-content-center gap-4">
                                    <div className="benefits__images-column d-flex flex-column gap-4">
                                        <img src={ben01Img} alt="Ben01" className={styles.benefits__img} />
                                        <img src={ben02Img} alt="Ben02" className={styles.benefits__img} />
                                    </div>
                                    <div className="benefits__images-column d-flex flex-column gap-4">
                                        <img src={ben03Img} alt="Ben03" className={styles.benefits__img} />
                                        <img src={ben04Img} alt="Ben04" className={styles.benefits__img} />
                                    </div>
                                </div>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
 
export default Benefits