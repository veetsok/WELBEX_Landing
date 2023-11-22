import styled from "styled-components";
import { keyframes } from "styled-components";

const PurpleBallAnimation = keyframes`
  0% {
    top: 0px;
    left: 60%;
    transition-timing-function: ease-in-out;
  }
  50%{
    top: 25%;
    left: 60%;
  }
  100% {
    top: 0px;
    left: 60%;
    transition-timing-function: ease-in-out;
  }
`;

const RedBallAnimation = keyframes`
  0% {
    top: 0px;
    left: 45%;
    transition-timing-function: ease-in-out;
  }
  50%{
    top: 40%;
    left: 25%;
    transition-timing-function: ease;
  }
  100% {
    top: 0px;
    left: 45%;
    transition-timing-function: ease-in;
  }
`;

const SmallRedBallAnimation = keyframes`
  0% {
    top: 55%;
    left: 59%;
    transition-timing-function: ease-in-out;
  }
  50%{
    top: 55%;
    left: 0%;
    transition-timing-function: ease-in-out;
  }
  100% {
    top: 55%;
    left: 59%;
    transition-timing-function: ease-in;
  }
`;

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
