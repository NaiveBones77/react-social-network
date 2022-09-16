
import {Input} from 'antd'
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../Redux/dialogs-reducer";
import MessageArea from "./MessageArea";
import {connect} from "react-redux";

const {TextArea} = Input



// const MessageAreaContainer = (props) => {
//
//     let newMessageText = props.store.getState().dialogsPage.newMessageText
//
//     let sendMessage = () => {
//         let action = sendMessageCreator()
//         props.store.dispatch(action)
//     }
//
//     let changeMessage = (text) => {
//         let action = updateNewMessageTextCreator(text)
//         props.store.dispatch(action)
//     }
//
//     return (
//         <MessageArea
//             sendMessage = {sendMessage}
//             changeMessage = {changeMessage}
//             newMessageText = {newMessageText}
//         />
//     )
// }

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        changeMessage: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        }
    }
}

const MessageAreaContainer = connect(mapStateToProps, mapDispatchToProps)(MessageArea)

export default MessageAreaContainer