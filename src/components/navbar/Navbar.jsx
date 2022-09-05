import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <div className={styles.item}>
                    <NavLink to='/profile' className={navData => navData.isActive ? styles.activeLink:styles.item}>Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/messages' className={navData => navData.isActive ? styles.activeLink:styles.item}>Messages</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/news' className={navData => navData.isActive ? styles.activeLink:styles.item}>News</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/music' className={navData => navData.isActive ? styles.activeLink:styles.item}>Music</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/settings' className={navData => navData.isActive ? styles.activeLink:styles.item}>Settings</NavLink>
                </div>
            </div>
           <div>
               <div className={styles.item}>
                   <NavLink to='/friends' className={navData => navData.isActive ? styles.activeLink:styles.item}>Friends</NavLink>

               </div>
           </div>
        </nav>
    )
}

export default Navbar;