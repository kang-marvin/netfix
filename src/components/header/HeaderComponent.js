import React from "react";
import { Header } from "semantic-ui-react";

import noImageFound from "../../images/noImageFound.png"
import defaultImageHolder from "../../images/defaultImageHolder.png"

import { headerData } from "../../data/headerData";

const HeaderComponent = _props => {

  const Logo = imageURL => {
    return (
      <img
        src={imageURL}
        alt="Missing"
        onError={e => {
          e.target.src = noImageFound;
        }}
        className="header-image-thumbnail"/>
    )
  }

  const AppTitle = props => {
    const {titleName} = props;
    return (
      <div>
        <p>{titleName}</p>
      </div>
    )
  }

  return (
    <div>
      <Header as="h1">
        <Logo imageURL={defaultImageHolder} />
        <AppTitle titleName={headerData.appName} />
      </Header>
    </div>
  )
}

export default HeaderComponent;
