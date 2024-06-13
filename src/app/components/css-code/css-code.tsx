import React from "react";
import Lowlight from "react-lowlight";

import { flexContainerHTMLDefaultValues, keyMapper } from "@/app/constants";
import type { FlexContainerStyles } from "@/app/types";
import css from "highlight.js/lib/languages/css";

Lowlight.registerLanguage("css", css);

import styles from "./css-code.module.css";
import { getNormalizedFlexContainerStyles } from "@/app/utils/style-normalizers";

type CSSCodeProps = {
  flexContainerStyles: FlexContainerStyles;
};

export function CSSCode(props: CSSCodeProps) {
  const { flexContainerStyles } = props;

  let styleString = `.flex-container {\n    `;

  let styleValues: string[] = [];

  Object.entries(getNormalizedFlexContainerStyles(flexContainerStyles)).forEach(
    ([key, value]) => {
      if (typeof value !== "undefined") {
        // @ts-expect-error - ignore the index signature error on this constant
        let normalizedKey = keyMapper[key] ?? key;

        let style = `${normalizedKey}: ${value};`;

        const defaultValue = flexContainerHTMLDefaultValues.hasOwnProperty(key)
          ? // @ts-expect-error - ignore the index signature error on this constant
            flexContainerHTMLDefaultValues[key]
          : undefined;

        if (defaultValue && defaultValue === value) {
          style += ` /* default */`;
        }

        styleValues.push(style);
      }
    }
  );

  styleString += styleValues.join("\n    ");
  styleString += `\n}`;

  return (
    <div className={styles["css"]}>
      <pre>
        <code>
          <Lowlight language="css" value={styleString} />
        </code>
      </pre>
    </div>
  );
}
