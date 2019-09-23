/**
 * Purpose of this file is:
 *  1. Filter content based on category ID
 */

import { contentBrowserData } from "../data/contentBrowserData";

class contentUtils {
  static filterByID(objectID) {
    const result = contentBrowserData
      .categoriesContent
      .filter(result => {
        return result.categoryID === objectID;
      })

    return result;
  }

}

export default contentUtils;
