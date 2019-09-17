import React from "react"

import { contentBrowserData } from "../../data/contentBrowserData";

import ListCategoryContent from "../../components/browser/ListCategoryContent";
class ContentBrowser extends React.Component {

  render() {

    const {
      minimumViewableContentInRow,
      maximumViewableContentInRow,
      availableContentCategories
    } = contentBrowserData;

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