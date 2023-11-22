import styled from "styled-components";
import Colors from "../../../constants/colors";

export const Footer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ResetContainer = styled.div`
  margin: 0 30px;
  @media (max-width: 321px) {
    margin: 0 15px;
  }
`;

export const FooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  & h4 {
    margin-bottom: 20px;
    color: ${Colors.GRAY};
    letter-spacing: 0.7px;
    text-transform: uppercase;
  }
  & h3 {
    margin-bottom: 10px;
  }
  @media (max-width: 321px) {
    flex-direction: column;
    text-align: left;
    & h4 {
      margin-top: 30px;
    }
  }
`;

export const About = styled.div``;

export const Menu = styled.div``;

export const MenuContainer = styled.div`
  margin-right: -50px;
  display: flex;
  @media (max-width: 321px) {
    margin-right: 0;
  }
`;

export const MenuBlock = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
`;

export const Contacts = styled.div`
  text-align: right;
  @media (max-width: 321px) {
    text-align: left;
  }
`;

export const ContactsBlock = styled.div`
  margin: 20px 0;
  @media (max-width: 321px) {
    margin: 8px 0 10px 0;
  }
`;

export const SubFooter = styled.div`
  margin-top: 15px;
  & h5 {
    text-align: right;
    margin-top: 5px;
  }
  & h5:last-child {
    text-decoration-line: underline;
  }
  @media (max-width: 321px) {
    margin-top: 50px;
    & h5 {
      text-align: left;
      margin-top: 5px;
    }
  }
`;
