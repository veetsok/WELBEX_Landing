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
  background: #833ab4;
  filter: blur(196px);
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
  background: #961a1a;
  filter: blur(196px);
`;

export const MainContent = styled.div`
  flex: 1;
`;

export const FooterContainer = styled.div`
  padding: 55px 0 20px 0;
`;

export const BallsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* чтобы шары не перекрывали контент */

  /* Создание анимации движущихся шаров */
  animation: moveBalls 5s linear infinite;
`;
