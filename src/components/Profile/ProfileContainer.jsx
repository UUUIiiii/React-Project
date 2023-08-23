import React from "react";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { useParams} from "react-router-dom";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";
import {getStatus, updateStatus} from "../../redux/profile-reducer"



function ProfileContainer(props) {
    let  userId  = useParams();
    if (userId) {
        userId = 2;

    }

    props.getUserProfile(userId);
    props.getStatus(userId); 
    return (
        <div>
            <Profile 
            {...props}
            profile={props.profile} 
            status={props.status}
             updateStatus={props.updateStatus}/>
        </div>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.userId,
    isAuth: state.auth.isAuth
})

// let AuthNavigateComponent = withAuthNavigate(ProfileContainer)

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withAuthNavigate
)(ProfileContainer)
