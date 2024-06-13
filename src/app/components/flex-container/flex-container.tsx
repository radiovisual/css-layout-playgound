import { PropsWithChildren } from "react";
import type { FlexContainerStyles } from "../../types";

import styles from "./flex-container.module.css";
import { getNormalizedFlexContainerStyles } from "@/app/utils/style-normalizers";

interface FlexContainerProps extends PropsWithChildren {
  flexContainerStyles: FlexContainerStyles;
}

export function FlexContainer(props: FlexContainerProps) {
  const { flexContainerStyles } = props;

  const normalizedStyles = getNormalizedFlexContainerStyles(
    flexContainerStyles
  ) as FlexContainerStyles;

  return (
    <div
      className={styles.container}
      style={{
        ...normalizedStyles,
      }}
    >
      {props.children}
    </div>
  );
}
