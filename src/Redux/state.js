
let rerenderEntireTree = () => {
    console.log('subscribed')
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree(state)
}

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}



export let store = {
    state : {
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
    rerenderEntireTree () {
        console.log('No subscribers')
    },
    updateNewPostText(text) {
        this.state.profilePage.newPostText = text
        this.rerenderEntireTree(this.state)
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this.state.profilePage.newPostText
        }
        this.state.profilePage.postsData.push(newPost)
        this.state.profilePage.newPostText=''
        this.rerenderEntireTree(this.state)
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    }

}


export default state;