import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://migrantcentrspb.ru/wp-content/uploads/2021/03/unnamed.jpg' />
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;