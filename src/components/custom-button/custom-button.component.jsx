import React from "react";

import { CustomButtonContainer } from "./custom-button.styles.js";

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
