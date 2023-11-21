import React from "react";
import * as ST from "./styled/index";
import Text from "../../UI_KIT/Atom/Text.atom";
import TextEnum from "../../UI_KIT/Atom/Text.atom/enum";
import Contacts from "../../UI_KIT/Molectules/Contacts.molecule";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <ST.Footer>
      <ST.ResetContainer>
        <ST.FooterBlock>
          <ST.About>
            <Text type={TextEnum.enum_Text_H4} children="О компании" />
            <Text type={TextEnum.enum_Text_H3} children="Партнёрская программа" />
            <Text type={TextEnum.enum_Text_H3} children="Вакансии" />
          </ST.About>
          <ST.Menu>
            <Text type={TextEnum.enum_Text_H4} children="Меню" />
            <ST.MenuContainer>
              <ST.MenuBlock>
                <Text type={TextEnum.enum_Text_H3} children="Расчёт стоимости" />
                <Text type={TextEnum.enum_Text_H3} children="Услуги" />
                <Text type={TextEnum.enum_Text_H3} children="Виджеты" />
                <Text type={TextEnum.enum_Text_H3} children="Интеграции" />
                <Text type={TextEnum.enum_Text_H3} children="Наши клиенты" />
              </ST.MenuBlock>
              <ST.MenuBlock>
                <Text type={TextEnum.enum_Text_H3} children="Кейсы" />
                <Text type={TextEnum.enum_Text_H3} children="Благодарственные письма" />
                <Text type={TextEnum.enum_Text_H3} children="Сертификаты" />
                <Text type={TextEnum.enum_Text_H3} children="Блог на Youtube" />
                <Text type={TextEnum.enum_Text_H3} children="Вопрос / Ответ" />
              </ST.MenuBlock>
            </ST.MenuContainer>
          </ST.Menu>

          <ST.Contacts>
            <Text type={TextEnum.enum_Text_H4} children="Контакты" />
            <Text type={TextEnum.enum_Text_H3} children={`+7\u00a0555\u00a0555-55-55`} />
            <ST.ContactsBlock>
              <Contacts />
            </ST.ContactsBlock>
            <Text
              type={TextEnum.enum_Text_H3}
              children="Москва, Путевой проезд 3с1, к 902"
            />
          </ST.Contacts>
        </ST.FooterBlock>
        <ST.SubFooter>
          <Text
            type={TextEnum.enum_Text_H5}
            children="©WELBEX 2022. Все права защищены."
          />
          <Text type={TextEnum.enum_Text_H5} children="Политика конфиденциальности" />
        </ST.SubFooter>
      </ST.ResetContainer>
    </ST.Footer>
  );
};
export default Footer;
