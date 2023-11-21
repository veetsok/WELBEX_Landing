import FontsEnum from "../../../../../constants/fonts";
import TextEnum from "../../enum";

const commonTextFonts = {
  [TextEnum.enum_Text_H1]: {
    fontFamily: FontsEnum.InterRegular,
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H2]: {
    fontFamily: FontsEnum.InterMedium,
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H3]: {
    fontFamily: FontsEnum.InterRegular,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H4]: {
    fontFamily: FontsEnum.InterBold,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H5]: {
    fontFamily: FontsEnum.MontserratRegular,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H6]: {
    fontFamily: FontsEnum.MontserratLight,
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
  },
};

export default commonTextFonts;
