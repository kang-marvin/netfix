/* eslint-disable */

import React from "react";
import { Header } from "semantic-ui-react";

import defaultImageHolder from "../../images/defaultImageHolder.png"
import noImageFound from "../../images/noImageFound.png"

import { headerData } from "../../data/headerData";

import "../../styles/headerStyle.css";

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
        <p className="app-title">{titleName}</p>
      </div>
    )
  }

  return (
    <div className="header-panel">
      <Header as="h1">
        {/* <Logo imageURL={defaultImageHolder} /> */}
        <AppTitle titleName={headerData.appName} />
      </Header>
    </div>
  )
}

export default HeaderComponent;
