import React from "react"

import contentUtils from "../../utils/contentUtils";

const uuidv4 = require("uuid/v4");
const defaultContentCount = 0;

const ListCategoryContent = props => {

  const {
    // minimumViewableContentInRow,
    // maximumViewableContentInRow,
    availableContentCategories
  } = props;

  const ShowCategoryName = props => {
    return (
      <div key={uuidv4()} className="category-name-panel">
        <p className="alignleft category-name">{ props.name }</p>
        <p className="content-count">{ props.contentCount }</p>
      </div>
    )
  }

  const ListContentOfCategory = props => {
    return (
      <div>
        <p>{ props.categoryID }</p>
        <p>Number of content available is { props.availableContent.length }</p>
      </div>
    )
  }

  return (
    <div>
      {Object
        .values(availableContentCategories)
        .map(categoryObject => {
          const {
            name,
            categoryID,
          } = categoryObject;
          const categoryContent = contentUtils.filterByID(categoryID)
          return (
            <div key={uuidv4()}>
              <ShowCategoryName
                name={name}
                contentCount={categoryContent.length || defaultContentCount}
              />
              <ListContentOfCategory
                categoryID={categoryID}
                availableContent={ categoryContent|| []}
              />
            </div>
          );
        })
      }
    </div>

  );

};

export default ListCategoryContent;
