import styles from "./Users.module.css";
import {Pagination} from "antd";
import userPhoto from "../../assets/images/imgAvatarDefault.png";
import React from "react";
import "antd/dist/antd.css";
import {NavLink} from "react-router-dom";
import * as axios from 'axios'


let Users = (props) => {
    return (
        <div>
            <div className={styles.pagination}>
                <Pagination
                    showQuickJumper
                    defaultCurrent={1}
                    total={props.totalUsersCount}
                    showSizeChanger={false}
                    pageSize={props.pageSize}
                    onChange={(page, pageSize) => {
                        props.onPageChanged(page, pageSize)
                    }}/>
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                 <img src={u.photos.small != null ? u.photos.small :
                                     userPhoto} className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                           {u.followed
                               ? <button onClick={() => {
                                   axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                       {withCredentials: true,
                                       headers: {
                                           'API-KEY': 'db65d9ab-48d6-40f5-a14a-646ab43b2e74'
                                       }
                                       })
                                       .then(response => {
                                           if (response.data.resultCode === 0) {
                                               props.unfollow(u.id)
                                           }
                                       })

                               }}>Unfollow</button>
                               : <button onClick={() => {
                                   axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                       null,
                                       {withCredentials: true,
                                           headers: {
                                               'API-KEY': 'db65d9ab-48d6-40f5-a14a-646ab43b2e74'
                                           }
                                       })
                                       .then(response => {
                                           if (response.data.resultCode === 0) {
                                               props.follow(u.id)
                                           }
                                       })
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

export default Users;