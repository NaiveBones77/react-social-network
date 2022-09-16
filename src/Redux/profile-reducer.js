
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    postsData : [
        {id: 1, message: 'How are you?'},
        {id: 2, message: "It's my first post"},
    ],
        newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state
    }

}

export const updatePostTextCreator = (text) => ({type: UPDATE_POST_TEXT, newText:text})
export const addPostCreator = () => ({type: ADD_POST})

export default profileReducer;