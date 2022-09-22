import styles from "./Users.module.css";
import {Pagination} from "antd";
import userPhoto from "../../assets/images/imgAvatarDefault.png";
import React from "react";
import "antd/dist/antd.css";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    return (
        <div>
            <div className={styles.pagination}>
                <Pagination
                    showQuickJumper
                    defaultCurrent={1}
                    total={props.totalUsersCount}
                    showSizeChanger = {false}
                    pageSize={props.pageSize}
                    onChange={ (page, pageSize) => {
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
                           {u.subscribed
                               ? <button onClick={() => {
                                   props.unfollow(u.id)
                               }}>Unfollow</button>
                               : <button onClick={() => {
                                   props.follow(u.id)
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