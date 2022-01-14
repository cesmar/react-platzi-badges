import React from "react";

import Navbar from "./Navbar";

function Layout(props) {
  return (
    // 'Layout'
    // props.children
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
