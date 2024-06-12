import { PropsWithChildren } from "react";
import type { FlexContainerStyles } from "../../types";

import styles from "./control-panel.module.css";
import React from "react";

interface ControlPanelProps extends PropsWithChildren {}

export function ControlPanel(props: ControlPanelProps) {
  return <div className={styles["control-panel"]}>Control Panel</div>;
}
