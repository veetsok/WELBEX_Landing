import React from "react";
import * as ST from "./style";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <ST.Container>
      <ST.ResetContainer></ST.ResetContainer>
    </ST.Container>
  );
};
export default MainPage;
