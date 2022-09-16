import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import MessageAreaContainer from "./MessageArea/MessageAreaContainer";
import {connect} from "react-redux";


const Dialogs = (props) => {

    let messagesElements = props.messages
        .map((el) => <Message text={el.message} key={el.id}/>)

    let dialogElement = props.dialogs
        .map((el) => (<Dialog name={el.name} key={el.id}/>))


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogElement}
            </div>
            <div className={styles.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <MessageAreaContainer/>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;