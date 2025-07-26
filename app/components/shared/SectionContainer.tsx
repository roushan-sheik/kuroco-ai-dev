import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
  containerWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  containerInnerProps?: React.HTMLAttributes<HTMLDivElement>;
};

const SectionContainer = ({
  children,
  containerWrapperProps = {},
  containerInnerProps = {},
}: SectionContainerProps) => {
  return (
    <div
      className={`flex items-center justify-center max-w-full w-full    ${
        containerWrapperProps.className || ""
      }`}
      {...containerWrapperProps}
    >
      <div
        className={`flex flex-col mx-auto  px-4 w-full ${
          containerInnerProps.className || ""
        }`}
        {...containerInnerProps}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
