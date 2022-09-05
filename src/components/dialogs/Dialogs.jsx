import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import MessageArea from "./MessageArea/MessageArea";



const Dialogs = (props) => {

    let dialogs = props.state.dialogs
    let messages = props.state.messages

    let messagesElements = messages
        .map((el) => <Message text={el.message}/>)

    let dialogElement = dialogs
        .map((el) => (<Dialog name={el.name} id={el.id}/>))


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
                    <MessageArea/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;