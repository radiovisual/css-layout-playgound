import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import Tooltip from "@mui/material/Tooltip";

import styles from "./toolbar.module.css";

interface ToolBarProps extends React.PropsWithChildren {
  onReset: () => void;
}

export function ToolBar(props: ToolBarProps) {
  const { onReset } = props;

  return (
    <div className={styles.toolbar}>
      <ButtonGroup size="small" aria-label="Editor controls">
        <Tooltip title="Reset to defaults">
          <IconButton
            onClick={onReset}
            aria-label="reset to default"
            color="secondary"
          >
            <RefreshIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}
