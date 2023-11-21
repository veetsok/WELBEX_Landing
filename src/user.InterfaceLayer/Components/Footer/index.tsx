import React from "react";
import * as ST from "./styled/index";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <ST.Footer>
      <ST.ResetContainer></ST.ResetContainer>
    </ST.Footer>
  );
};
export default Footer;
