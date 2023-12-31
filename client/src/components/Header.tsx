import * as React from "react";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <div>
      <h1 className="font-weight-light display-1 text-center">
        Restaurant Finder
      </h1>
    </div>
  );
};

export default Header;
