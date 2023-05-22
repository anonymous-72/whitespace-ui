import { Col, Container, Row } from 'react-bootstrap'
import styles from './Faq.module.scss'
import SectionHeader from '../section-header/SectionHeader'
import FaqAccordion from '../faq-accordion/FaqAccordion'
import mailImg from './../../img/icons/mail.svg'

const Faq = () => {
    return (
        <section className={styles.faq}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.faq__header}>
                            <SectionHeader 
                                title={"Frequently Asked Questions"} 
                                subtitle={"We tried to answer most common questions, if you have any additional, please get in touch with our friendly team"}
                            />
                        </div>
                        <div className={styles.faq__accordion}>
                            <FaqAccordion 
                                eventKey={0}
                                header={"01. What are properties in Figma?"} 
                                body={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quia iste eaque nisi, exercitationem natus, sed animi architecto hic, amet qui doloremque molestiae dolorum libero ipsa nam eos deserunt magnam."}
                            />
                            <FaqAccordion 
                                eventKey={1}
                                header={"02. How Whitespace UI kit and Design System can help me?"} 
                                body={"The main feature of Whitespace UI that it saves you time. If it saves you time, it automatically saves you money. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars."}
                            />
                            <FaqAccordion 
                                eventKey={2}
                                header={"03. What is your return policy?"} 
                                body={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quia iste eaque nisi, exercitationem natus, sed animi architecto hic, amet qui doloremque molestiae dolorum libero ipsa nam eos deserunt magnam."}
                            />
                            <FaqAccordion 
                                eventKey={3}
                                header={"04. How can I contact customer support?"} 
                                body={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quia iste eaque nisi, exercitationem natus, sed animi architecto hic, amet qui doloremque molestiae dolorum libero ipsa nam eos deserunt magnam."}
                            />
                            <FaqAccordion 
                                eventKey={4}
                                header={"05. What payment methods do you accept?"} 
                                body={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quia iste eaque nisi, exercitationem natus, sed animi architecto hic, amet qui doloremque molestiae dolorum libero ipsa nam eos deserunt magnam."}
                            />
                        </div>
                        <div className={styles.faq__question}>
                            <h3 className={styles.faq__questionTitle}>Still have a questions?</h3>
                            <p className={styles.faq__questionSubtitle}>We're sorry we couldn't provide you with the information you were looking for. Please contact us and we'll be happy to help.</p>
                            <a href="#!" className={styles.faq__questionBtn}>
                                <div className={styles.faq__questionBtnBody}>
                                    <img src={mailImg} alt="Mail" /> Contact us
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
 
export default Faq