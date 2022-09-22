import Profile from "./Profile";
import React from 'react'
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";

function withRouter(Children) {
    return (props)=> {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId=2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlParamsContainerComponent=withRouter(ProfileContainer)


export default connect(mapStateToProps, {setProfile})(WithUrlParamsContainerComponent)
