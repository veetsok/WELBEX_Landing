import { css } from "styled-components";
import FontsEnum from "../../../../../constants/fonts";

export const commonButtonStyles = css`
  display: inline-flex;
  padding: 21px 35px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: ${FontsEnum.InterMedium};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
