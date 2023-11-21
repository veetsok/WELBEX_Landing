import React from "react";
import { Outlet } from "react-router-dom";
import * as ST from "./user.InterfaceLayer/router/styled/styled";
import Navbar from "./user.InterfaceLayer/Components/Navbar/index";
import Footer from "./user.InterfaceLayer/Components/Footer";

const App: React.FC = () => {
  return (
    <ST.PageContainer>
      <ST.NavContainer>
        <Navbar />
      </ST.NavContainer>
      <ST.MainContent>
        <Outlet />
      </ST.MainContent>
      <ST.FooterContainer>
        <Footer />
      </ST.FooterContainer>
    </ST.PageContainer>
  );
};
export default App;
