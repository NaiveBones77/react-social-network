import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src='https://i.pinimg.com/originals/23/80/0b/23800b995292379883a15d9a4c382b22.png'/>
            <div className={styles.headerBlock}>
                {props.isAuth ? props.login :
                    <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>)
}

export default Header;