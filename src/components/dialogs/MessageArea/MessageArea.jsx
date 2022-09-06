import {createRef} from "react";
import {Input} from 'antd'
import styles from './MessageArea.module.css'

const {TextArea} = Input



const MessageArea = () => {

    let messageAreaElement = createRef()

    let sendMessage = () => {
        let text = messageAreaElement.current.value
        alert(text)
    }

    return (
        <div className ={styles.messageArea}>
            <TextArea ref={messageAreaElement} rows={4} ></TextArea>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageArea