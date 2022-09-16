import {createRef} from "react";
import {Input} from 'antd'
import styles from './MessageArea.module.css'

const {TextArea} = Input



const MessageArea = (props) => {

    let newMessageText = props.newMessageText
    let messageAreaElement = createRef()

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.changeMessage(text)
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