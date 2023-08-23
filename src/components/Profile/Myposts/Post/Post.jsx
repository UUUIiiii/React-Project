import React from "react";
// import "./Profile.css";
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/736x/9a/0d/eb/9a0debd592a5b15b9b979d53bfb0e019.jpg" />
            {props.message}
            <div>
                <span>Like </span>{props.likesCount}
            </div>
        </div>);
}

export default Post;