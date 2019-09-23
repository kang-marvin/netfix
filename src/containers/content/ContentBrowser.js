import React from "react"

import { categoryBrowserData } from "../../data/categoryBrowserData";

import ListCategoryContent from "../../components/browser/ListCategoryContent";

import "../../styles/contentBrowserStyle.css";
class ContentBrowser extends React.Component {

  render() {

    const {
      minimumViewableContentInRow,
      maximumViewableContentInRow,
      availableContentCategories
    } = categoryBrowserData;

    return (
      <div>
        <ListCategoryContent
          availableContentCategories={availableContentCategories}
          maximumViewableContentInRow={maximumViewableContentInRow}
          minimumViewableContentInRow={minimumViewableContentInRow}
        />
      </div>
    )
  }
}

export default ContentBrowser;