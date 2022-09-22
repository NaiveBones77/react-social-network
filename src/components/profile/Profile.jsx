import styles from './Profile.module.css'
import Description from "./Description/Description";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <Description profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;