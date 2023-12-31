import React from "react";
import s from './Users.module.css'
import userPhoto from '../../assets/img/6913f1e82c7454cb1a0e1137b3609759.jpg'
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totelUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return < div className={s.container} >
        <div>    {pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage}
                onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
        })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span className={s.photoButton}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto} />
                        </NavLink>
                    </div>
                    <div className={s.btnContainer}>

                        <div className={s.buttons}>
                            {u.followed
                                ? <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                    onClick={() => { props.unfollow(u.id) }}>
                                    Unfollow</button>

                                : <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                    onClick={() => { props.follow(u.id) }}>
                                    Follow</button>}
                        </div>
                    </div>
                </span>
                <span className={s.profileDescription}>
                    <span>
                        <div className={s.profileName}>{u.name}</div>
                        {/* <div>{u.status}</div> */}
                    </span>
                    <span>
                        {/* <div>{'u.location.country'}</div> */}
                        {/* <div>{'u.location.city'}</div> */}
                    </span>
                </span>
            </div>)
        }
    </div >
}

export default Users