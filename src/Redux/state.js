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
            ]
        }
    },
    _callSubscriber(observer) {
        this.rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    rerenderEntireTree () {
        console.log('No subscribers')
    },
    updateNewPostText(text) {
        this._state.profilePage.newPostText = text
        this.rerenderEntireTree(this._state)
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText=''
        this.rerenderEntireTree(this._state)
    },

    detach(action) {
        if (action.type === '') {

        }
    }


}


export default store;