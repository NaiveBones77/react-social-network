import {addPostCreator, updatePostTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()
//
//                     let addPost = () => {
//                         let action = addPostCreator()
//                         store.dispatch(action)
//                     }
//
//                     let changePostText = (text) => {
//                         let action = updatePostTextCreator(text)
//                         store.dispatch(action)
//                     }
//
//                     return (
//                         <MyPosts updateNewPostText={changePostText}
//                                  addPost={addPost}
//                                  posts={state.profilePage.postsData}
//                                  newPostText={state.profilePage.newPostText}
//                         />)
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updatePostTextCreator(text)
            dispatch(action)
        },
        addPost: () => {
            let action = addPostCreator()
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;