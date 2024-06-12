export type FlexItemStyles = {
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string | number | "auto";
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
};

export type FlexContainerStyles = {
  width: number | string;
  height: number | string;
  margin: number | string;
  padding: number | string;
  display: "flex" | "block" | "inline-flex";
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right";
  justifyContentSafeValue?: "safe" | "unsafe";
  alignItems?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "safe"
    | "unsafe"
    | "unset"
    | "normal";
  alignItemsSafeValue?: "safe" | "unsafe";
  alignContent?:
    | "normal"
    | "start"
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "first baseline"
    | "space-between"
    | "last baseline"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "safe"
    | "unsafe";
  alignContentSafeValue?: "safe" | "unsafe";
};
