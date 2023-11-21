import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 90px 0 68px 0;
`;

export const ResetContainer = styled.div`
  margin: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: self-start;
`;

export const TitleBlock = styled.div`
  max-width: 362px;
  & h1,
  h2 {
    text-align: left;
  }
  & h2 {
    margin-top: 30px;
    max-width: 275px;
  }
`;

export const Welbex = styled.div`
  display: contents;
  & h1 {
    background-image: linear-gradient(90deg, #fcb045, #ff3f78);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 900;
  }
`;

export const SubTitleContainer = styled.div``;

export const SubTitleBlock = styled.div``;

export const MiniBlock = styled.div``;