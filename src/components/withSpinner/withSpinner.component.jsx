import React from "react";

import Spinner from "../spinner/spinner.component";

// eslint-disable-next-line react/display-name
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

WithSpinner.displayName = "WithSpinner";

export default WithSpinner;
