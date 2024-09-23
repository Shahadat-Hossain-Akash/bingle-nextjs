import React from "react";

const DynamicComponent = ({ render: Component }) => {
  return Component ? <Component /> : null;
};

export default DynamicComponent;
