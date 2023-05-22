import { Col, Container, Row } from 'react-bootstrap'
import styles from './FormSubscription.module.scss'
import Buttons from '../button/Buttons'

const FormSubscription = () => {
    return (
        <section className={styles.formSubscription}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.formSubscription__content}>
                            <h2 className={styles.formSubscription__title}>Enter your e-mail address and get started for free</h2>
                            <div className={styles.formSubscription__subtitle}>Stay up to date with the most relevant information, our new collections, news and special offers!</div>
                            <form className={styles.formSubscription__form}>
                                <input type="email" className={styles.formSubscription__input} placeholder="Your e-mail address" />
                                <Buttons title={"Subscribe"} />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
 
export default FormSubscription