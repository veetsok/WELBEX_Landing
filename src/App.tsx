import React from "react";
import { Outlet } from "react-router-dom";
import * as ST from "./user.InterfaceLayer/router/styled/styled";
import Navbar from "./user.InterfaceLayer/Components/Navbar/index";
import Footer from "./user.InterfaceLayer/Components/Footer";
import Balls from "./user.InterfaceLayer/UI_KIT/Molectules/Ball.molecule";

const App: React.FC = () => {
  return (
    <ST.PageContainer>
      <ST.PurpleLight></ST.PurpleLight>
      <ST.RedLight></ST.RedLight>
      <ST.NavContainer>
        <Navbar />
      </ST.NavContainer>
      <ST.MainContent>
        <ST.PurpleLightMobile></ST.PurpleLightMobile>
        <ST.RedLightMobile></ST.RedLightMobile>
        <ST.BallsContainer>
          <Balls />
        </ST.BallsContainer>
        <Outlet />
      </ST.MainContent>
      <ST.FooterContainer>
        <Footer />
      </ST.FooterContainer>
    </ST.PageContainer>
  );
};
export default App;
