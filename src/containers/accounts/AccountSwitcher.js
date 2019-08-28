import React from "react";
import { MDBBtn } from "mdbreact";
import { Button } from "semantic-ui-react";

import UserProfile from "../../components/common/UserProfile";

import { usersData } from "../../data/usersData";

import "../../styles/accountSwitcherStyle.css";

class AccountSwitcher extends React.Component {

  componentDidMount = _ => {}

  render() {
    return (
      <div className="account-switcher-panel">
        <p className="whos-watching-text">
          {usersData.whoseIsWatchingText}
        </p>
        <div className="list-profiles">
          {
            usersData.users
              .slice(0, usersData.availableUsersLimit)
              .map(user => {
                return(
                  <li>
                    <UserProfile user={user} />
                  </li>
                )
            })
          }
        </div>
        <div>
          <MDBBtn outline color="white" className="manage-profiles-button">
            { usersData.manageProfileButton }
          </MDBBtn>
        </div>
      </div>
    )
  }
}

export default AccountSwitcher;
