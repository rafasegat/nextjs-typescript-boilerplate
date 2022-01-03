import React, { FC } from "react";

type Props = {
  children?: React.ReactNode;
  alignItemsCenter?: boolean;
  margin?: string;
  customClass?: string;
};

const defaultProps: Partial<Props> = {
  children: null,
  alignItemsCenter: false,
  margin: "",
  customClass: "",
};

const Row: FC<Props> = ({
  children,
  alignItemsCenter,
  margin,
  customClass,
}: Props) => {
  return (
    <div
      className={`flex flex-row ${
        alignItemsCenter ? "items-center" : ""
      } ${margin} ${customClass}`}
    >
      {children}
    </div>
  );
};

Row.defaultProps = defaultProps;
export default Row;
