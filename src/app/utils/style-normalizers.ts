import { FlexContainerStyles } from "../types";

export function flexContainerStyleNormalizer(
  flexContainerStyles: FlexContainerStyles
) {
  if (!flexContainerStyles) {
    console.log("hi");
    return {};
  }

  let styles = {
    ...flexContainerStyles,
  };

  if (flexContainerStyles.width) {
    styles.width = `${flexContainerStyles.width}%`;
  }

  if (flexContainerStyles.height) {
    styles.height = `${flexContainerStyles.height}%`;
  }

  if (flexContainerStyles.padding) {
    styles.padding = `${flexContainerStyles.padding}px`;
  }

  return styles;
}

export function getSafeUnsafeOrDefault(positionOverflowString: string): string {
  if (["safe", "unsafe"].includes(positionOverflowString)) {
    return positionOverflowString;
  }
  return "default";
}
