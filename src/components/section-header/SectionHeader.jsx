import styles from './SectionHeader.module.scss'

const SectionHeader = (props) => {
    const {title, subtitle} = props

    return (
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeader__title}>{title}</h2>
            <div className={styles.sectionHeader__subtitle}>{subtitle}</div>
        </div>
    )
}
 
export default SectionHeader