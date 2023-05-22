import { Accordion } from 'react-bootstrap'
import styles from './FaqAccordion.module.scss'

const FaqAccordion = (props) => {
    const {eventKey, header, body} = props

    return (
        <div className={styles.accordion}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey={eventKey} className={styles.accordion__item}>
                    <Accordion.Header>
                        <h3 className={styles.accordion__header}>{header}</h3>
                    </Accordion.Header>
                    <Accordion.Body><p className={styles.accordion__body}>{body}</p></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
 
export default FaqAccordion