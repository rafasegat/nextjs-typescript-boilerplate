import React, { FC } from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";

type Props = {
  appearance?: "primary" | "secondary";
  customClass?: string;
  onClick: (value: any) => void;
};

const Button: FC<Props> = ({
  appearance = "primary",
  customClass = "",
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      className={classnames(styles.component, styles[appearance], customClass)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
