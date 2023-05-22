import styles from './NavButton.module.scss'
import navBtnImg from './../../img/icons/nav-button.svg'

const NavButton = ( {onClick} ) => {
    return (
        <button className={styles.navButton} id={styles.navButton} onClick={onClick}>
            <img src={navBtnImg} alt="NavBtn" />
        </button>
    )
}
 
export default NavButton