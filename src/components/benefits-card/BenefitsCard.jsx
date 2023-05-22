import styles from './BenefitsCard.module.scss'

const BenefitsCard = (props) => {
    const {img, title, desc} = props

    return (
        <div className={styles.benefits__card}>
            <img src={img} alt="" />
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}
 
export default BenefitsCard