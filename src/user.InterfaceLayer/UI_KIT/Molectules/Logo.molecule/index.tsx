import React from "react";
import { Link } from "react-router-dom";
import * as ST from "./styled";
import Image from "../../Atom/Image.atom";
import ImageEnum from "../../Atom/Image.atom/enum";
import LogoSvg from "../../../shared/assets/icons/welbexIcon.svg?react";
import Welbex from "../../../shared/assets/icons/welbex.svg?react";
import Text from "../../Atom/Text.atom";
import TextEnum from "../../Atom/Text.atom/enum";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <ST.Logo>
        <ST.Image>
          <Image type={ImageEnum.enum_defaultSvg} icon={<LogoSvg />} />
          <Image type={ImageEnum.enum_defaultSvg} icon={<Welbex />} />
        </ST.Image>

        <Text
          type={TextEnum.enum_Text_H6}
          children={`крупный интегратор CRM в\u00a0России и\u00a0ещё\u00a08\u00a0странах`}
        />
      </ST.Logo>
    </Link>
  );
};
export default Logo;
