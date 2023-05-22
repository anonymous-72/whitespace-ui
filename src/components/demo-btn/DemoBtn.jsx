import styles from './DemoBtn.module.scss'
import playBtnImg from './../../img/icons/play-btn.svg'

const DemoBtn = (props) => {
    const {link} = props
    return (
        <a href={link} className={styles.demoBtn}>
            <div className={styles.demoBtn__text}>
                <img src={playBtnImg} alt="playBtn" /> Watch demo
            </div>
        </a>
    )
}
 
export default DemoBtn