import { PropsWithChildren } from "react";
import type { FlexContainerStyles } from "../../types";

import styles from "./css-code.module.css";
import React from "react";

interface CSSCodeProps extends PropsWithChildren {}

export function CSSCode(props: CSSCodeProps) {
  return <div className={styles["css"]}>CSSCode</div>;
}
