import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;