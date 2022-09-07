import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {createRef} from "react";
import {addPostCreator, updatePostTextCreator} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {

    let postsData = props.posts

    let posts = postsData.map(el => <Post message={el.message}/>)

    let newPostElement = createRef()

    let addPost = () => {
        let action = addPostCreator()
        props.detach(action)
    }

    let changePostText = () => {
        let text = newPostElement.current.value
        let action = updatePostTextCreator(text)
        props.detach(action)
    }

    return (
        <div>
            <div className={styles.postBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement} onChange={changePostText} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>New post</button>
                </div>
            </div>
            {posts}
        </div>
    )
}

export default MyPosts;