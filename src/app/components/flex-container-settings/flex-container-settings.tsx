import React from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";

import { styleStringToInteger } from "@/app/utils/numbers";
import styles from "./flex-container-settings.module.css";
import { flexContainerStyleValues } from "@/app/constants";
import { FlexContainerStyles } from "@/app/types";
import Divider from "@mui/material/Divider";

type FlexContainerSettingsProps = {
  onUpdateFlexContainerCSSSetting: (
    key: string,
    value: string | number | number[]
  ) => void;
  flexContainerStyles: FlexContainerStyles;
};

export function FlexContainerSettings(props: FlexContainerSettingsProps) {
  const { onUpdateFlexContainerCSSSetting, flexContainerStyles } = props;

  return (
    <div className={styles.container}>
      <Typography>Flex Container Settings</Typography>

      <Divider />
      <div className={styles["size-sliders"]}>
        <Typography sx={{ m: 1, minWidth: 70 }} id="input-width" gutterBottom>
          width (%)
        </Typography>
        <Slider
          size="small"
          value={styleStringToInteger(flexContainerStyles.width)}
          aria-label="Width"
          valueLabelDisplay="auto"
          aria-labelledby="input-width"
          onChange={(event: Event, newValue: number | number[]) =>
            onUpdateFlexContainerCSSSetting("width", newValue)
          }
        />
        <Typography sx={{ m: 1, minWidth: 75 }} id="input-height" gutterBottom>
          height (%)
        </Typography>
        <Slider
          size="small"
          value={styleStringToInteger(flexContainerStyles.height)}
          aria-label="Height"
          valueLabelDisplay="auto"
          aria-labelledby="input-height"
          onChange={(event: Event, newValue: number | number[]) =>
            onUpdateFlexContainerCSSSetting("height", newValue)
          }
        />

        <Typography sx={{ m: 1, minWidth: 95 }} id="input-padding" gutterBottom>
          padding (px)
        </Typography>
        <Slider
          size="small"
          value={styleStringToInteger(flexContainerStyles.padding)}
          aria-label="padding"
          valueLabelDisplay="auto"
          aria-labelledby="input-padding"
          onChange={(event: Event, newValue: number | number[]) =>
            onUpdateFlexContainerCSSSetting("padding", newValue)
          }
        />
      </div>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="flex-container-display">display</InputLabel>
        <Select
          labelId="flex-container-display"
          id="display"
          value={flexContainerStyles.display}
          label="Display"
          onChange={(event: SelectChangeEvent) =>
            onUpdateFlexContainerCSSSetting("display", event.target.value)
          }
        >
          {flexContainerStyleValues.display.map((value: string) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="flex-container-direction">flex-direction</InputLabel>
        <Select
          labelId="flex-container-direction"
          id="flex-direction"
          value={flexContainerStyles.flexDirection}
          label="flex-direction"
          onChange={(event: SelectChangeEvent) =>
            onUpdateFlexContainerCSSSetting("flexDirection", event.target.value)
          }
        >
          {flexContainerStyleValues.flexDirection.map((value: string) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="flex-container-wrap">flex-wrap</InputLabel>
        <Select
          labelId="flex-container-wrap"
          id="flex-wrap"
          value={flexContainerStyles.flexWrap}
          label="flex-wrap"
          onChange={(event: SelectChangeEvent) =>
            onUpdateFlexContainerCSSSetting("flexWrap", event.target.value)
          }
        >
          {flexContainerStyleValues["flexWrap"].map((value: string) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="flex-container-justify">justify-content</InputLabel>
        <Select
          labelId="flex-container-justify"
          id="justify-content"
          value={flexContainerStyles.justifyContent}
          label="justify-content"
          onChange={(event: SelectChangeEvent) =>
            onUpdateFlexContainerCSSSetting(
              "justifyContent",
              event.target.value
            )
          }
        >
          {flexContainerStyleValues.justifyContent.map((value: string) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <InputLabel id="flex-container-align-items">align-items</InputLabel>
        <Select
          size="small"
          labelId="flex-container-align-items"
          id="align-items"
          value={flexContainerStyles.alignItems}
          label="align-items"
          onChange={(event: SelectChangeEvent) =>
            onUpdateFlexContainerCSSSetting("alignItems", event.target.value)
          }
        >
          {flexContainerStyleValues.alignItems.map((value: string) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>

        <InputLabel id="flex-container-align-items-overflow-position">
          overflow position
        </InputLabel>

        <Select
          size="small"
          labelId="flex-container-align-items-overflow-position"
          id="align-items-overflow-position"
          value={flexContainerStyles.alignItemsSafeValue ?? undefined}
          label="overflow-position"
          onChange={(event: SelectChangeEvent) =>
            onUpdateFlexContainerCSSSetting(
              "alignItemsSafeValue",
              event.target.value
            )
          }
        >
          <MenuItem value={undefined}>
            <em>default</em>
          </MenuItem>
          <MenuItem value="safe">safe</MenuItem>
          <MenuItem value="unsafe">unsafe</MenuItem>
        </Select>
      </Stack>

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <InputLabel id="flex-container-align-content">align-content</InputLabel>
        <Select
          size="small"
          labelId="flex-container-align-content"
          id="align-content"
          value={flexContainerStyles.alignContent}
          label="align-content"
          onChange={(event: SelectChangeEvent) =>
            onUpdateFlexContainerCSSSetting("alignContent", event.target.value)
          }
        >
          {flexContainerStyleValues.alignItems.map((value: string) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>

        <InputLabel id="flex-container-align-content-overflow-position">
          overflow position
        </InputLabel>

        <Select
          size="small"
          labelId="flex-container-align-content-overflow-position"
          id="align-content-overflow-position"
          value={flexContainerStyles.alignContentSafeValue ?? undefined}
          label="overflow-position"
          onChange={(event: SelectChangeEvent) =>
            onUpdateFlexContainerCSSSetting(
              "alignContentSafeValue",
              event.target.value
            )
          }
        >
          <MenuItem value={undefined}>
            <em>default</em>
          </MenuItem>
          <MenuItem value="safe">safe</MenuItem>
          <MenuItem value="unsafe">unsafe</MenuItem>
        </Select>
      </Stack>

      <div>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Typography id="input-gap" gutterBottom>
            gap
          </Typography>
          <Slider
            size="small"
            value={flexContainerStyles.gap}
            aria-label="gap"
            max={100}
            valueLabelDisplay="auto"
            aria-labelledby="input-gap"
            onChange={(event: Event, newValue: number | number[]) =>
              onUpdateFlexContainerCSSSetting("gap", newValue)
            }
          />

          <Typography sx={{ minWidth: 60 }} id="input-row-gap" gutterBottom>
            row-gap
          </Typography>
          <Slider
            size="small"
            value={flexContainerStyles.rowGap}
            aria-label="row-gap"
            max={100}
            valueLabelDisplay="auto"
            aria-labelledby="input-row-gap"
            onChange={(event: Event, newValue: number | number[]) =>
              onUpdateFlexContainerCSSSetting("rowGap", newValue)
            }
          />

          <Typography sx={{ minWidth: 100 }} id="input-column-gap" gutterBottom>
            column-gap
          </Typography>
          <Slider
            size="small"
            value={flexContainerStyles.columnGap}
            aria-label="column-gap"
            max={100}
            valueLabelDisplay="auto"
            aria-labelledby="input-column-gap"
            onChange={(event: Event, newValue: number | number[]) =>
              onUpdateFlexContainerCSSSetting("columnGap", newValue)
            }
          />
        </Stack>
      </div>
    </div>
  );
}
