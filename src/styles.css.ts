import { style } from "@vanilla-extract/css";
import { responsiveContainerStyle } from "grommet-exp";
import { structuredTokens } from "hpe-design-tokens";

export const mainContainer = style({
  containerType: "inline-size",
});

export const mainGrid = style([
  responsiveContainerStyle({
    large: {
      gridTemplateColumns: `${structuredTokens.content.medium} 1fr`,
    },
  }),
]);

// right grid
export const rightGridContainer = style({ containerType: "inline-size" });
export const upperGrid = style([
  responsiveContainerStyle({
    large: {
      gridTemplateColumns: "1fr 1fr",
    },
  }),
]);
export const lowerGrid = style([
  responsiveContainerStyle({
    large: {
      gridTemplateColumns: `1fr ${structuredTokens.content.medium}`,
    },
  }),
]);
