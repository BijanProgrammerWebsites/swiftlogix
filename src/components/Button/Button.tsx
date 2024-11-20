import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "./Button.module.css";

export enum Variant {
  SOLID = "solid",
  OUTLINE = "outline",
}

type Props = ComponentProps<"button"> & {
  variant?: Variant;
};

export default function Button({
  className,
  children,
  variant = Variant.SOLID,
  ...rest
}: Props): ReactElement {
  return (
    <button
      className={clsx(className, styles.button, styles[variant])}
      {...rest}
    >
      {children}
    </button>
  );
}
