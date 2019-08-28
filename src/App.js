import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";

import { default as Header } from "./components/header/HeaderComponent";

require("dotenv").config();

const App = props => {

  const { children } = props;

  return (
    <BrowserRouter>
      <div>
        <div className="sticky-top">
          <Header />
        </div>
        <div className="container-fluid">
          {children}
        </div>
      </div>
    </BrowserRouter>
  );
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
