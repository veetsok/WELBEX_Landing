import React from "react";
import * as ST from "./styled/styled";
import Logo from "../../UI_KIT/Molectules/Logo.molecule";
import Text from "../../UI_KIT/Atom/Text.atom";
import TextEnum from "../../UI_KIT/Atom/Text.atom/enum";
import Contacts from "../../UI_KIT/Molectules/Contacts.molecule";

const Navbar: React.FC = () => {
  return (
    <ST.Navbar>
      <ST.ResetContainer>
        <Logo />
        <ST.MenuImportant>
          <Text type={TextEnum.enum_Text_H3} children="Услуги" />
          <Text type={TextEnum.enum_Text_H3} children="Виджеты" />
          <Text type={TextEnum.enum_Text_H3} children="Интеграции" />
          <Text type={TextEnum.enum_Text_H3} children="Кейсы" />
          <Text type={TextEnum.enum_Text_H3} children="Сертификаты" />
        </ST.MenuImportant>
        <ST.Contacts>
          <Text type={TextEnum.enum_Text_H3} children={`+7\u00a0555\u00a0555-55-55`} />
          <Contacts />
        </ST.Contacts>
      </ST.ResetContainer>
    </ST.Navbar>
  );
};
export default Navbar;
