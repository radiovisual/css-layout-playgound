"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { FlexContainer } from "@/app/components/flex-container";
import { FlexItem } from "@/app/components/flex-item";
import { CSSCode } from "@/app/components/css-code";
import { FlexContainerSettings } from "@/app/components/flex-container-settings";
import type { FlexContainerStyles, FlexItemStyles } from "@/app/types";

const defaultContainerStyles: FlexContainerStyles = {
  alignContentSafeValue: undefined,
  alignItemsSafeValue: undefined,
  justifyContent: "flex-start",
  flexDirection: "column",
  alignContent: "normal",
  alignItems: "stretch",
  flexWrap: "wrap",
  display: "flex",
  columnGap: 0,
  height: 80,
  padding: 0,
  width: 80,
  margin: 0,
  rowGap: 0,
  gap: 0,
};

const defaultFlexItemStyles: FlexItemStyles = {};

const defaultFlexItems = [
  <FlexItem key={1} index={1} styles={defaultFlexItemStyles} />,
  <FlexItem key={2} index={2} styles={defaultFlexItemStyles} />,
  <FlexItem key={3} index={3} styles={defaultFlexItemStyles} />,
];

export default function FlexPage() {
  const [flexContainerStyles, setFlexContainerStyles] =
    useState<FlexContainerStyles>(defaultContainerStyles);
  const [flexItems, setFlexItems] = useState(defaultFlexItems);

  function onUpdateFlexContainerCSSSetting(
    key: string,
    value: string | number | number[]
  ) {
    const updatedStyles = {
      ...flexContainerStyles,
      [key]: value,
    };
    setFlexContainerStyles(updatedStyles);
  }

  return (
    <main className={styles.flexpage}>
      <div className={styles.container}>
        <div className={styles.main}>
          <FlexContainer flexContainerStyles={flexContainerStyles}>
            {flexItems.length > 0 && flexItems}
          </FlexContainer>
        </div>
        <div className={styles.settings}>
          <FlexContainerSettings
            onUpdateFlexContainerCSSSetting={onUpdateFlexContainerCSSSetting}
            flexContainerStyles={flexContainerStyles}
          />
        </div>
        <div className={styles.css}>
          <CSSCode />
        </div>
      </div>
    </main>
  );
}
