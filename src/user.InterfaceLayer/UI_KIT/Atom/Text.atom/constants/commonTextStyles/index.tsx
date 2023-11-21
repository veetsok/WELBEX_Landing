import { css } from "styled-components";
import Colors from "../../../../../constants/colors";

export const commonTextStyles = css`
  color: ${Colors.DEFAULT};
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  white-space: normal;
`;
