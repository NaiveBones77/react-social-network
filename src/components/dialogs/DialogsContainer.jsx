
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


// const Dialogs = (props) => {
//     let state = store.getState().dialogsPage
//     let dialogs = state.dialogs
//     let messages = state.messages
//
//
//     let messagesElements = messages
//         .map((el) => <Message text={el.message}/>)
//
//     let dialogElement = dialogs
//         .map((el) => (<Dialog name={el.name} id={el.id}/>))
//
//
//     return (
//         <div className={styles.dialogs}>
//             <div className={styles.dialogsItem}>
//                 {dialogElement}
//             </div>
//             <div className={styles.messages}>
//                 <div>
//                     {messagesElements}
//                 </div>
//                 <div>
//                     <MessageAreaContainer/>
//                 </div>
//             </div>
//         </div>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return null
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;