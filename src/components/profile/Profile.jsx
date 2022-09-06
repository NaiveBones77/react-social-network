import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css'
import Description from "./Description/Description";


const Profile = (props) => {
    let posts = props.state.postsData
    return (
        <div>
            <div >
                <img className={styles.topImage} src='https://wallpaperping.com/wp-content/uploads/2020/01/pexels-photo-466685.jpeg'/>
            </div>
            <Description/>
            <MyPosts posts={posts}
                     detach={props.detach}
                     newPostText={props.state.newPostText}
            />
        </div>
    )
}

export default Profile;