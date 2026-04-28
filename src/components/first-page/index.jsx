import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";
import Srtik from "../../assets/image/srtik.png";
import { useTranslation } from "react-i18next";

export const FirstPage = () => {
  const { t } = useTranslation();
  return (
    <FirstPagePart>
      <img src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div className="mt-7 text-[#2D2929] maintext">
            <p>{t("wedding_day")}</p>
            <h3>{t("names")}</h3>
            <p>09.09.26</p>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
