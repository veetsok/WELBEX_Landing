import React from "react";
import * as ST from "./styled";
import Image from "../../Atom/Image.atom";
import ImageEnum from "../../Atom/Image.atom/enum";
import PurpleBall from "../../../shared/assets/icons/purpleBall.svg?react";
import RedBall from "../../../shared/assets/icons/redBall.svg?react";
import SmallRedBall from "../../../shared/assets/icons/smallRedBall.svg?react";

const Balls: React.FC = () => {
  return (
    <>
      <ST.PurpleBall>
        <Image type={ImageEnum.enum_defaultSvg} icon={<PurpleBall />} />
      </ST.PurpleBall>
      <ST.RedBall>
        <Image type={ImageEnum.enum_defaultSvg} icon={<RedBall />} />
      </ST.RedBall>
      <ST.SmallRedBall>
        <Image type={ImageEnum.enum_defaultSvg} icon={<SmallRedBall />} />
      </ST.SmallRedBall>
    </>
  );
};
export default Balls;
