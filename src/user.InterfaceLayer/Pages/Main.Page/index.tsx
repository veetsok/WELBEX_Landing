import React from "react";
import * as ST from "./style";
import Text from "../../UI_KIT/Atom/Text.atom";
import TextEnum from "../../UI_KIT/Atom/Text.atom/enum";

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
          <Text
            type={TextEnum.enum_Text_H2}
            children={`Вместе с\u00a0бесплатной консультацией мы\u00a0дарим:`}
          />
          <ST.SubTitleBlock>
            <ST.MiniBlock>
              <Text
                type={TextEnum.enum_Text_H2}
                children={`Вместе с\u00a0бесплатной консультацией мы\u00a0дарим:`}
              />
              <Text
                type={TextEnum.enum_Text_H3}
                children={`30\u00a0готовых\u2028решений`}
              />
            </ST.MiniBlock>
            <ST.MiniBlock>
              <Text type={TextEnum.enum_Text_H2} children={`Skype Аудит`} />
              <Text
                type={TextEnum.enum_Text_H3}
                children={`отдела продаж\u2028и\u00a0CRM системы`}
              />
            </ST.MiniBlock>
            <ST.MiniBlock>
              <Text type={TextEnum.enum_Text_H2} children={`Dashboard`} />
              <Text
                type={TextEnum.enum_Text_H3}
                children={`с\u00a0показателями вашего бизнеса`}
              />
            </ST.MiniBlock>
            <ST.MiniBlock>
              <Text type={TextEnum.enum_Text_H2} children={`35\u00a0дней`} />
              <Text type={TextEnum.enum_Text_H3} children={`использования\u2028CRM`} />
            </ST.MiniBlock>
          </ST.SubTitleBlock>
        </ST.SubTitleContainer>
      </ST.ResetContainer>
    </ST.Container>
  );
};
export default MainPage;
