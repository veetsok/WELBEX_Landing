import styled from "styled-components";

export const Navbar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ResetContainer = styled.div`
  display: flex;
  margin: 0 30px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuImportant = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -15px;
  & h3 {
    margin: 0 15px;
    cursor: pointer;
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
`;
