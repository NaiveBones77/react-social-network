import styles from './Profile.module.css'
import Description from "./Description/Description";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <div >
                <img className={styles.topImage} src='https://wallpaperping.com/wp-content/uploads/2020/01/pexels-photo-466685.jpeg'/>
            </div>
            <Description/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;