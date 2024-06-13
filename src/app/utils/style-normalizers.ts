import { FlexContainerStyles } from "../types";

export function getNormalizedFlexContainerStyles(
  flexContainerStyles: FlexContainerStyles
) {
  const { gap, columnGap, rowGap } = flexContainerStyles;

  let styles: Partial<FlexContainerStyles> = {};

  const keysToIgnore = ["gap", "rowGap", "columnGap"];

  for (let [key, value] of Object.entries(flexContainerStyles)) {
    if (typeof value !== "undefined" && !keysToIgnore.includes(key)) {
      if (key === "width" && value) {
        styles.width = `${flexContainerStyles.width}%`;
      } else if (key === "height" && value) {
        styles.height = `${flexContainerStyles.height}%`;
      } else if (key === "padding" && value) {
        styles.padding = `${flexContainerStyles.padding}px`;
      } else {
        // @ts-expect-error - ignore the index string error
        styles[key] = value;
      }
    }
  }

  const normalizedGap = getGapStyle({ gap, columnGap, rowGap });
  styles.gap = normalizedGap.gap;
  styles.rowGap = normalizedGap.rowGap;
  styles.columnGap = normalizedGap.columnGap;

  return styles;
}

export function getSafeUnsafeOrDefault(positionOverflowString: string): string {
  if (["safe", "unsafe"].includes(positionOverflowString)) {
    return positionOverflowString;
  }
  return "default";
}

function getGapStyle(styleObject: {
  gap?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
}): {
  gap?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
} {
  const { gap, rowGap, columnGap } = styleObject;

  let normGap = undefined;
  let normRow = undefined;
  let normCol = undefined;

  if (typeof gap === "number" && gap > 0) {
    normGap = gap;
    normRow = undefined;
    normCol = undefined;
  } else if (gap && gap !== "0" && !rowGap && !columnGap) {
    normGap = `${gap}px`;
    normRow = undefined;
    normCol = undefined;
  } else if (!gap && (rowGap || columnGap)) {
    normGap = undefined;
    normRow = `${rowGap ?? 0}px`;
    normCol = `${columnGap ?? 0}px`;
  }

  return { gap: normGap, columnGap: normCol, rowGap: normRow };
}
