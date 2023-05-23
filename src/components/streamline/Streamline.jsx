import { Col, Container, Row } from "react-bootstrap"
import styles from './Streamline.module.scss'
import SectionHeader from "../section-header/SectionHeader"
import tickIcon from './../../img/icons/tick.svg'
import Buttons from "../button/Buttons"
import DemoBtn from "../demo-btn/DemoBtn"

const Streamline = () => {
    return (
        <section className={styles.streamline}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.streamline__header}>
                            <SectionHeader 
                                title={"Streamline your workflow with SaaS: Get started now"}  
                                subtitle={"Stay up to date with the most relevant information"} 
                            />
                        </div>
                        <div className={styles.streamline__benefits}>
                            <div className={styles.streamline__benefit}>
                                <img src={tickIcon} alt="Tick" />
                                <h5>Unlimited pages</h5>
                            </div>
                            <div className={styles.streamline__benefit}>
                                <img src={tickIcon} alt="Tick" />
                                <h5>Easy Access</h5>
                            </div>
                            <div className={styles.streamline__benefit}>
                                <img src={tickIcon} alt="Tick" />
                                <h5>14-days free trial</h5>
                            </div>
                        </div>
                        <div className={styles.streamline__btns}>
                            <Buttons title={"Get started"} />
                            <DemoBtn />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
 
export default Streamline