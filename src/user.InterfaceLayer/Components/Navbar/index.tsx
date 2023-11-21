import React from "react";
import * as ST from "./styled/styled";
import Logo from "../../UI_KIT/Molectules/Logo.molecule";
import Text from "../../UI_KIT/Atom/Text.atom";
import TextEnum from "../../UI_KIT/Atom/Text.atom/enum";
import Image from "../../UI_KIT/Atom/Image.atom";
import ImageEnum from "../../UI_KIT/Atom/Image.atom/enum";
import Telegram from "../../shared/assets/icons/telegram.svg?react";
import Viber from "../../shared/assets/icons/viber.svg?react";
import Whatsapp from "../../shared/assets/icons/whatsapp.svg?react";

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
          <Text type={TextEnum.enum_Text_H3} children="+7 555 555-55-55" />
          <Image type={ImageEnum.enum_defaultSvg} icon={<Telegram />} />
          <Image type={ImageEnum.enum_defaultSvg} icon={<Viber />} />
          <Image type={ImageEnum.enum_defaultSvg} icon={<Whatsapp />} />
        </ST.Contacts>
      </ST.ResetContainer>
    </ST.Navbar>
  );
};
export default Navbar;
