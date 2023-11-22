import styled from "styled-components";

export const Navbar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ResetContainer = styled.div`
  display: flex;
  margin: 0 30px;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 321px) {
    margin: 0;
  }
`;

export const MenuImportant = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -15px;
  & h3 {
    margin: 0 15px;
    cursor: pointer;
  }
  @media (max-width: 321px) {
    margin: 0;
    & h3 {
      margin: 0 8px;
    }

    & h3:last-child {
      display: none;
    }
  }
`;
export const Contacts = styled.div`
  display: flex;
  align-items: center;
  & h3 {
    margin-right: 47px;
  }
  & div {
    cursor: pointer;
  }
  @media (max-width: 321px) {
    display: none;
  }
`;
