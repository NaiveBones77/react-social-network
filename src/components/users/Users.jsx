import React from 'react'
import userPhoto from "../../assets/images/imgAvatarDefault.png";
import styles from "./Users.module.css";
import * as axios from "axios";
import {Pagination} from 'antd'
import "antd/dist/antd.css";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page, pageSize) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        return (
            <div>
                <div className={styles.pagination}>
                    <Pagination
                        showQuickJumper
                        defaultCurrent={1}
                        total={this.props.totalUsersCount}
                        showSizeChanger = {false}
                        pageSize={this.props.pageSize}
                        onChange={ (page, pageSize) => {
                            this.onPageChanged(page, pageSize)
                    }}/>
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small :
                                userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                           {u.subscribed
                               ? <button onClick={() => {
                                   this.props.unfollow(u.id)
                               }}>Unfollow</button>
                               : <button onClick={() => {
                                   this.props.follow(u.id)
                               }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }

}

export default Users;