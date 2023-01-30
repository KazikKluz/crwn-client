import React from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasErrored: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
          <ErrorImageText>This Page is Lost in Space</ErrorImageText>
          <p>
            You thought this mission to the moon would be a quick six month
            thing. Your neighbor offered to look after your dog. Your high
            school math teacher was impressed. He once said you wouldn’t amount
            to anything.You sure showed him. But now here you are, fifty feet
            from your spaceship with no way to get back. Your dog will be so
            sad. Your math teacher will be so smug. Pretty devastating.
          </p>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
