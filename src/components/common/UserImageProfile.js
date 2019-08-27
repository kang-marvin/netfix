import React from "react";

import defaultImageIcon from "../../images/defaultImageIcon.jpeg";

const UserImageProfile = props => {

  const userImage =
    props.userImage === ""
      ? defaultImageIcon
      : props.userImage

  return (
    <img
      src={userImage}
      alt="Missing"
      onError={e => {
        e.target.src = defaultImageIcon;
      }}
      className="img-user-profile-thumbnail"/>
  )
}

export default UserImageProfile;

