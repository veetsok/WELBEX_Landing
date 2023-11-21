import React from "react";
import Image from "../../Atom/Image.atom";
import ImageEnum from "../../Atom/Image.atom/enum";
import Telegram from "../../../shared/assets/icons/telegram.svg?react";
import Viber from "../../../shared/assets/icons/viber.svg?react";
import Whatsapp from "../../../shared/assets/icons/whatsapp.svg?react";
import * as ST from "./styled";

const Contacts: React.FC = () => {
  return (
    <ST.Container>
      <Image type={ImageEnum.enum_defaultSvg} icon={<Telegram />} />
      <Image type={ImageEnum.enum_defaultSvg} icon={<Viber />} />
      <Image type={ImageEnum.enum_defaultSvg} icon={<Whatsapp />} />
    </ST.Container>
  );
};
export default Contacts;
