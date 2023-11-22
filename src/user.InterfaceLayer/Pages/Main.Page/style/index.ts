import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 90px 0 68px 0;
  @media (max-width: 321px) {
    padding: 40px 0 60px 0;
  }
`;

export const ResetContainer = styled.div`
  margin: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  @media (max-width: 321px) {
    margin: 0 15px;
    flex-direction: column;
  }
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
  @media (max-width: 321px) {
    & h1 {
      font-size: 36px;
    }
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

export const SubTitleContainer = styled.div`
  max-width: 290px;
  text-align: right;
  & button {
    margin-top: 60px;
  }
  @media (max-width: 321px) {
    text-align: left;

    & button {
      display: none;
    }
  }
`;

export const Span1 = styled.span`
  background: var(--gradient, linear-gradient(90deg, #fcb045 36.99%, #fd1d1d 100%));
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.9px;
  text-transform: uppercase;
`;
export const Span = styled.span`
  background: var(--gradient, linear-gradient(67deg, #fcb045 0%, #fd1d1d 360%));
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.9px;
  text-transform: uppercase;
`;

export const SubTextGradient = styled.div`
  margin-bottom: 40px;
  @media (max-width: 321px) {
    margin: 45px 0 6px 0;
  }
`;

export const SubTitleBlock = styled.div`
  display: flex;
  text-align: right;
  justify-content: space-between;
  @media (max-width: 321px) {
    justify-content: normal;
    text-align: left;
  }
`;

export const MiniBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 135px;
  margin-bottom: 30px;
  & h2 {
    letter-spacing: 0.9px;
    text-transform: uppercase;
  }
  & h3 {
    font-family: "Montserrat-Regular";
    margin-top: 5px;
  }
  @media (max-width: 321px) {
    margin-bottom: 0px;
    & h3 {
      display: none;
    }
    & h2 {
      font-size: 13px;
      margin: 14px 10px 0 0;
    }
  }
`;