import React from "react"

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

  return (
    <div>
      {Object
        .values(availableContentCategories)
        .map(categoryObject => {
          const {
            name,
            contentCountOnRow
          } = categoryObject;
          return (
            <div key={uuidv4()}>
              <ShowCategoryName
                name={name}
                contentCount={contentCountOnRow || defaultContentCount}
              />
            </div>
          );
        })
      }
    </div>

  );

};

export default ListCategoryContent;
