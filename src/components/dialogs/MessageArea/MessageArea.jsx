import {createRef} from "react";


const MessageArea = () => {

    let messageAreaElement = createRef()

    let sendMessage = () => {
        let text = messageAreaElement.current.value
        alert(text)
    }

    return (
        <div>
            <textarea ref={messageAreaElement}></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageArea