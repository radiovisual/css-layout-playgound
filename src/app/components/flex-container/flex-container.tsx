import { PropsWithChildren } from "react";
import type { FlexContainerStyles } from "../../types";

import styles from "./flex-container.module.css";
import { flexContainerStyleNormalizer } from "@/app/utils/style-normalizers";

interface FlexContainerProps extends PropsWithChildren {
  flexContainerStyles: FlexContainerStyles;
}

export function FlexContainer(props: FlexContainerProps) {
  const { flexContainerStyles } = props;

  const normalizedStyles = flexContainerStyleNormalizer(
    flexContainerStyles
  ) as FlexContainerStyles;

  console.log({ normalizedStyles });
  return (
    <div
      className={styles.container}
      style={{
        width: normalizedStyles.width,
        height: normalizedStyles.height,
        padding: normalizedStyles.padding,
        display: normalizedStyles.display,
        flexDirection: normalizedStyles.flexDirection,
        flexWrap: normalizedStyles.flexWrap,
        justifyContent: normalizedStyles.justifyContent,
        alignItems: normalizedStyles.alignItems,
        alignContent: normalizedStyles.alignContent,
        gap: normalizedStyles.gap,
        rowGap: normalizedStyles.rowGap,
        columnGap: normalizedStyles.columnGap,
      }}
    >
      {props.children}
    </div>
  );
}
