import styled from "styled-components";
import Colors from "../../constants/colors";

export const NavContainer = styled.div`
  padding-top: 46px;
  @media (max-width: 321px) {
    padding: 20px 0;
    background: ${Colors.BODY};
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

export const PurpleLight = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  width: 259px;
  height: 259px;
  flex-shrink: 0;
  border-radius: 259px;
  opacity: 0.5;
  background: ${Colors.PURPLE};
  filter: blur(196px);
  @media (max-width: 321px) {
    display: none;
  }
`;

export const RedLight = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  width: 311px;
  height: 311px;
  flex-shrink: 0;
  border-radius: 311px;
  opacity: 0.5;
  background: ${Colors.RED};
  filter: blur(196px);
  @media (max-width: 321px) {
    display: none;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  @media (max-width: 321px) {
    position: relative;
    background: radial-gradient(
      304.35% 148.2% at 3.2% 3.49%,
      rgba(255, 246, 233, 0.1) 0%,
      rgba(26, 29, 35, 0.1) 26.62%,
      rgba(26, 29, 35, 0.1) 52.1%,
      rgba(26, 29, 35, 0.01) 70.17%,
      rgba(26, 29, 35, 0) 100%
    );
    backdrop-filter: blur(7.5px);
  }
`;

export const PurpleLightMobile = styled.div`
  position: absolute;
  bottom: 79px;
  right: 0;
  width: 259px;
  height: 259px;
  flex-shrink: 0;
  border-radius: 259px;
  opacity: 0.5;
  background: ${Colors.PURPLE};
  filter: blur(196px);
`;

export const RedLightMobile = styled.div`
  position: absolute;
  left: -60px;
  bottom: 0;
  background: ${Colors.RED};
  width: 211px;
  height: 210px;
  flex-shrink: 0;
  opacity: 0.5;
  filter: blur(196px);
`;

export const FooterContainer = styled.div`
  padding: 55px 0 20px 0;
  @media (max-width: 321px) {
    padding: 45px 0 60px 0;
  }
`;

export const BallsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
