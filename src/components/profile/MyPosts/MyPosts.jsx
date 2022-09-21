import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {createRef} from "react";

const MyPosts = (props) => {

    let postsData = props.posts

    let posts = postsData.map(el => <Post message={el.message} key = {el.id}/>)

    let newPostElement = createRef()

    let onAddPost = () => {
        props.addPost();
    }

    let onChangePostText = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            <div className={styles.postBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement} onChange={onChangePostText} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost }>New post</button>
                </div>
            </div>
            {posts}
        </div>
    )
}

export default MyPosts;