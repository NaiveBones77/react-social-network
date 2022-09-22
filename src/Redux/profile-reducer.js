
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    postsData : [
        {id: 1, message: 'How are you?'},
        {id: 2, message: "It's my first post"},
    ],
        newPostText: '',
    profile: null
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
        case SET_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }

}

export const updatePostTextCreator = (text) => ({type: UPDATE_POST_TEXT, newText:text})
export const addPostCreator = () => ({type: ADD_POST})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})

export default profileReducer;