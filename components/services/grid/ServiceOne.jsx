import React from "react";

import Service from "../Service";
import { getServiceData } from "../../../data/service";

const ServiceOne = ({ className }) => {
  return (
    <Service.grid
      col={3}
      colTablet={3}
      colMobile={1}
      colGap={25}
      masonry
      className={className}
      data={getServiceData()}
      backgroundColor={"background-section"}
      styleBox={"line"}
    />
  );
};

export default ServiceOne;
