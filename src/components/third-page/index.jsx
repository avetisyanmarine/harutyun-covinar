import {
  ThirdPagePart,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import Haverjutyun from "../../assets/image/haverjutyun.png";
import Church from "../../assets/image/church.png";
import Kenac from "../../assets/image/kenac.png";
import { ThirdPageBlock } from "./third-page-block";
import { useTranslation } from "react-i18next";

export const ThirdPage = () => {
  const { t } = useTranslation();

  return (
    <ThirdPagePart>
      <Container>
        <h2 style={{ marginBottom: "40px" }}>{t('program_title')}</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            imageSize={80}
            ImageSrc={Haverjutyun}
            number={"10:30"}
            bigText={t('groom_house')}
          />
          <ThirdPageBlock
            imageSize={80}
            ImageSrc={Haverjutyun}
            number={"12:00"}
            bigText={t('bride_house')}
          />
          <ThirdPageBlock
            imageSize={80}
            ImageSrc={Church}
            number={"14:30"}
            bigText={t('church_ceremony')}
            smallText={t('church_name')}
          />
          <ThirdPageBlock
            imageSize={80}
            ImageSrc={Haverjutyun}
            number={"16:00"}
            bigText={t('groom_house')}
          />
          <ThirdPageBlock
            line={true}
            ImageSrc={Kenac}
            imageSize={80}
            number={"17:30-18:00"}
            bigText={t('wedding_party')}
            smallText={t('restaurant_name')}
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          <hr />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};