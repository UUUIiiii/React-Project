import React from "react";
import s from './Profileinfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.content}>
            {/* < div >
                <img src='https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=' />
            </div > */}
            <div className={s.descriptionBlock}>
                <img className={s.userPhoto} src={props.profile.photos.large} />
                <ProfileStatusWithHooks status={props.status} updateStatus = {props.updateStatus} />
            </div>
        </div >);
}

export default Profileinfo