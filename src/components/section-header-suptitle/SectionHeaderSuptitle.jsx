import styles from './SectionHeaderSuptitle.module.scss'

const SectionHeaderSuptitle = (props) => {
    const {suptitle} = props

    return (
        <div className={styles.sectionHeaderSuptitle}>{suptitle}</div>
    )
}
 
export default SectionHeaderSuptitle