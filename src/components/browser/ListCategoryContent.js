import React from "react"

import contentUtils from "../../utils/contentUtils";
import UserProfile from "../../components/common/UserProfile";

const uuidv4 = require("uuid/v4");
const defaultContentCount = 0;

const ListCategoryContent = props => {

  const {
    // minimumViewableContentInRow,
    // maximumViewableContentInRow,
    availableContentCategories
  } = props;

  const CategoryInformation = props => {
    return (
      <div key={uuidv4()} className="category-information-panel">
        <p className="alignleft category-name">{ props.name }</p>
        <p className="content-count">{ props.contentCount }</p>
      </div>
    )
  }

  const ListContentOfCategory = props => {
    const {availableContent} = props;
    return(
      <div key={props.categoryID} className="category-content-panel">
        {Object
          .values(availableContent)
          .map(contentObject => {
            return (
              <div
                className="content-panel"
                key={uuidv4()}>
                  <ContentInformation
                    contentObject={contentObject}
                  />
              </div>
            )
          }
        )}
      </div>
    )
  }

  const ContentInformation = props => {
    const { contentObject } = props;
    const user = {
      imageProfile: '',
      userName: contentObject.name
    }
    return (
      <React.Fragment>
        <UserProfile user={user} />
      </React.Fragment>
    )
  }

  return (
    <div>
      {Object
        .values(availableContentCategories)
        .filter(categoryObject =>
          contentUtils.filterByID(categoryObject.categoryID).length > 0
        )
        .map(categoryObject => {
          const {
            name,
            categoryID,
          } = categoryObject;
          const categoryContent = contentUtils.filterByID(categoryID)
          return (
            <div key={uuidv4()} className="category-panel">
              <CategoryInformation
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
