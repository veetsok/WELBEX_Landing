import styled from "styled-components";
import { commonButtonStyles } from "../constants/commonButtonStyles";
import Colors from "../../../../constants/colors";

interface Button {
  isLoading?: boolean;
}

export const DefaultButton = styled.button<Button>`
  ${commonButtonStyles};
  background: ${Colors.BLUE};
  color: ${Colors.DEFAULT};
`;

export const Button = styled.div<Button>``;
