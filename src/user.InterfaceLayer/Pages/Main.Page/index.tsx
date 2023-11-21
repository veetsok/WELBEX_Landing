import React from "react";
import * as ST from "./style";
import Text from "../../UI_KIT/Atom/Text.atom";
import TextEnum from "../../UI_KIT/Atom/Text.atom/enum";
import Button from "../../UI_KIT/Atom/Button.atom";
import ButtonEnum from "../../UI_KIT/Atom/Button.atom/enum";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <ST.Container>
      <ST.ResetContainer>
        <ST.TitleBlock>
          <Text type={TextEnum.enum_Text_H1} children={`Зарабатывайте\u2028больше`} />
          <ST.Welbex>
            <Text type={TextEnum.enum_Text_H1} children={`с\u00a0WELBEX`} />
          </ST.Welbex>
          <Text
            type={TextEnum.enum_Text_H2}
            children={`Развиваем и\u00a0контролируем продажи за\u00a0вас`}
          />
        </ST.TitleBlock>
        <ST.SubTitleContainer>
          <ST.SubTextGradient>
            <Text type={TextEnum.enum_Text_H2}>
              <Text type={TextEnum.enum_Text_H2}>
                Вместе с <ST.Span1>бесплатной</ST.Span1> <ST.Span>консультацией</ST.Span>{" "}
                мы дарим:
              </Text>
            </Text>
          </ST.SubTextGradient>
          <ST.SubTitleBlock>
            <ST.MiniBlock>
              <Text type={TextEnum.enum_Text_H2} children={`Виджеты`} />
              <Text
                type={TextEnum.enum_Text_H3}
                children={`30\u00a0готовых\u2028решений`}
              />
            </ST.MiniBlock>
            <ST.MiniBlock>
              <Text type={TextEnum.enum_Text_H2} children={`Dashboard`} />
              <Text
                type={TextEnum.enum_Text_H3}
                children={`с\u00a0показателями вашего бизнеса`}
              />
            </ST.MiniBlock>
          </ST.SubTitleBlock>
          <ST.SubTitleBlock>
            <ST.MiniBlock>
              <Text type={TextEnum.enum_Text_H2} children={`Skype Аудит`} />
              <Text
                type={TextEnum.enum_Text_H3}
                children={`отдела продаж\u2028и\u00a0CRM системы`}
              />
            </ST.MiniBlock>
            <ST.MiniBlock>
              <Text type={TextEnum.enum_Text_H2} children={`35\u00a0дней`} />
              <Text type={TextEnum.enum_Text_H3} children={`использования\u2028CRM`} />
            </ST.MiniBlock>
          </ST.SubTitleBlock>
          <Button type={ButtonEnum.enum_defaultButton} children="Получить консультацию" />
        </ST.SubTitleContainer>
      </ST.ResetContainer>
    </ST.Container>
  );
};
export default MainPage;
