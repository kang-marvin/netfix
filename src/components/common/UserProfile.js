import React from "react";

import UserImageProfile from "./UserImageProfile";

const UserProfile = props => {

  const {user} = props;

  return (
    <div>
      <UserImageProfile userImage={user.imageProfile}/>
      <p className="user-profile-username">{user.userName}</p>
    </div>
  )
}

export default UserProfile;
