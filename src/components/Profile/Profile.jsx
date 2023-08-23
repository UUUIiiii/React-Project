import React from "react";
// import "./Profile.css";
import s from "./Profile.module.css"
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <Profileinfo profile={props.profile} status={props.status} updateStatus = {props.updateStatus} />
            <MyPostsContainer />
        </div>);
}

export default Profile;