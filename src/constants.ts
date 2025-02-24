import type { AnchoredPosition } from "./types";

export const POSITION_OUT_OF_VIEW = -10000000;
export const ANCHORED_POSITION_OUT_OF_VIEW: AnchoredPosition = {
    type: "top",
    relativeCoordinate: POSITION_OUT_OF_VIEW,
    top: POSITION_OUT_OF_VIEW,
};
