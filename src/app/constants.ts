export const flexItemStyleValues = {
  alignSelf: [
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch",
  ],
};

export const keyMapper = {
  justifyContent: "justify-content",
  alignContent: "align-content",
  alignItems: "align-items",
  flexWrap: "flex-wrap",
  columnGap: "column-gap",
  rowGap: "row-gap",
  flexDirection: "flex-direction",
};

/**
 * These are the default values defined by the CSS specification.
 */
export const flexContainerHTMLDefaultValues = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "normal",
  gap: "normal",
  rowGap: "normal",
  columnGap: "normal",
};

export const safeKeywords = ["safe", "unsafe"];

export const flexContainerStyleValues = {
  display: ["flex", "block", "inline-flex"],
  flexDirection: ["row", "row-reverse", "column", "column-reverse"],
  flexWrap: ["nowrap", "wrap", "column", "wrap-reverse"],
  justifyContent: [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "start",
    "end",
    "left",
    "right",
  ],
  alignItems: [
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "first baseline",
    "last baseline",
    "start",
    "end",
    "self-start",
    "self-end",
    "safe",
    "unsafe",
    "unset",
    "normal",
  ],
  alignContent: [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
    "start",
    "end",
    "baseline",
    "first baseline",
    "last baseline",
    "safe",
    "unsafe",
  ],
};
