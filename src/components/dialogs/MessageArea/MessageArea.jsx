import {createRef} from "react";
import {Input} from 'antd'
import styles from './MessageArea.module.css'
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../Redux/dialogs-reducer";

const {TextArea} = Input



const MessageArea = (props) => {

    let newMessageText = props.store.getState().dialogsPage.newMessageText
    let messageAreaElement = createRef()

    let onSendMessageClick = () => {
        let action = sendMessageCreator()
        props.store.dispatch(action)
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageTextCreator(text)
        props.store.dispatch(action)
    }

    return (
        <div className ={styles.messageArea}>
            <TextArea
                ref={messageAreaElement}
                rows={4}
                placeholder = 'Enter your message'
                value={newMessageText}
                onChange={onNewMessageChange}
            ></TextArea>
            <button onClick={onSendMessageClick}>Send</button>
        </div>
    )
}

export default MessageArea