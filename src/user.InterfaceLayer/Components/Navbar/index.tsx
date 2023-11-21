import React from "react";
import * as ST from "./styled/styled";
import Logo from "../../UI_KIT/Molectules/Logo.molecule";

const Navbar: React.FC = () => {
  return (
    <ST.Navbar>
      <ST.ResetContainer>
        <Logo />
      </ST.ResetContainer>
    </ST.Navbar>
  );
};
export default Navbar;
