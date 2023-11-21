import styled from "styled-components";

export const Footer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ResetContainer = styled.div`
  margin: 0 30px;
`;

export const FooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  & h4 {
    margin-bottom: 20px;
  }
  & h3 {
    margin-bottom: 10px;
  }
`;

export const About = styled.div``;

export const Menu = styled.div``;

export const MenuContainer = styled.div`
  margin-right: -50px;
  display: flex;
`;

export const MenuBlock = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
`;

export const Contacts = styled.div`
  text-align: right;
`;

export const ContactsBlock = styled.div`
  margin: 20px 0;
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
`;
