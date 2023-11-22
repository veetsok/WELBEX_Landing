import styled from "styled-components";
import {
  PurpleBallAnimation,
  RedBallAnimation,
  SmallRedBallAnimation,
} from "./animation";

export const PurpleBall = styled.div`
  position: absolute;
  animation-name: ${PurpleBallAnimation};
  animation-duration: 20000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  & div {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
  }
`;

export const RedBall = styled.div`
  position: absolute;
  animation-name: ${RedBallAnimation};
  animation-duration: 7000ms;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  & div {
    width: 83px;
    height: 83px;
    flex-shrink: 0;
  }
`;

export const SmallRedBall = styled.div`
  position: absolute;
  animation-name: ${SmallRedBallAnimation};
  animation-duration: 22000ms;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  & div {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
`;
