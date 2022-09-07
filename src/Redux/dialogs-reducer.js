
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs : [
        {id: 1, name: 'Maxon'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Irina'},
        {id: 4, name: 'Victor'}
    ],
    messages : [
        {id: 1, message: 'How are u?'},
        {id: 2, message: 'I want to say hello to your batoo'}
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let lastId = state.messages[state.messages.length - 1] + 1
            let newMessage = {
                id : lastId + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body
            break;
        default:
            return state
    }

    return state
}


export const sendMessageCreator = () => ({type:SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT, body: text})

export default dialogsReducer;