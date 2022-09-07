import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



export let store = {
    _state : {
        profilePage: {
            postsData : [
                {id: 1, message: 'How are you?'},
                {id: 2, message: "It's my first post"},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar : {}
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    _callSubscriber () {
        console.log('No subscribers')
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }


}






export default store;