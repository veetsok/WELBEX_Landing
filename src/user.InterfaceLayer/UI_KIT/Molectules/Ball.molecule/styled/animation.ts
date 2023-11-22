import { keyframes } from "styled-components";

export const PurpleBallAnimation = keyframes`
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

export const RedBallAnimation = keyframes`
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

export const SmallRedBallAnimation = keyframes`
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
