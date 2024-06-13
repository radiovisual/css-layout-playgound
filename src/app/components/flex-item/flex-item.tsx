import React from "react";
import type { FlexItemStyles } from "../../types";

import styles from "./flex-item.module.css";

interface FlexItemProps {
  index: number;
  styles: FlexItemStyles;
}

export function FlexItem(props: FlexItemProps): React.JSX.Element {
  const { index } = props;

  return (
    <div className={styles["flex-item"]}>
      <div className={styles.number}>{index}</div>
      flex-item
    </div>
  );
}
