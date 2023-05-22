import styles from './Buttons.module.scss'

const Buttons = (props) => {
    const {title, link} = props

    return (
        <a href={link} className={styles.button}>{title}</a>
    )
}
 
export default Buttons