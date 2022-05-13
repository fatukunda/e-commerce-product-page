import React, { FunctionComponent } from "react";

const AppFooter: FunctionComponent = (): JSX.Element => {
  return (
    <footer className="m-4 text-center text-[.6rem] md:m-2 md:text-xs">
      Challenge by{" "}
      <a
        href="https://www.nu3.de/"
        target="_blank"
        rel="noreferrer"
        className="font-bold uppercase text-primary underline transition-all duration-300 hover:text-tertiary"
      >
        Nu3
      </a>
      . Coded by{" "}
      <a
        href="https://www.frankatukunda.com/"
        target="_blank"
        rel="noreferrer"
        className="font-bold uppercase text-primary underline transition-all duration-300 hover:text-tertiary"
      >
        Frank Atukunda
      </a>
    </footer>
  );
};

export default AppFooter;
