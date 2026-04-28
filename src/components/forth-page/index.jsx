import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import HeartLine from "../../assets/image/heartline.png";
import Photo3 from "../../assets/image/examp2.jpg";
import Bant from "../../assets/image/bant.png";
import AttendanceGuests from "../AttendanceGuests/index";
import { useTranslation } from "react-i18next";

export const ForthPage = () => {
  const { t } = useTranslation();
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={t("church_name")}
            mapSrc={"https://yandex.com/maps/-/CDB1IDP0"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={t("restaurant_name")}
            mapSrc={
              "https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-US&fbclid=IwY2xjawRd20RleHRuA2FlbQIxMABicmlkETFuUVcySzdSN3BlU1lqS0Ewc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjXRPaVLQwvs8YoOQemJH6WCdN2OstKyXWABZXkDa1h9qcKaSxOmG1yWRoLR_aem_imCT1TEAGdB8MX6NT8sbkg&FORM=FBKPL1&q=Mkhitar+Heratsu+St.%2C+7%2F8+Building%2C+Masis%2C+Armenia%2C+0801&cp=40.163587~44.436363&lvl=11&style=r"
            }
          />
        </ForthPagePartContext>
        <div className="relative mt-10">
          <img
            src={Photo3}
            alt="Restaurant"
            className="w-full rounded-[15px] grayscale contrast-125 brightness-105"
          />
        </div>
      </Container>

      <div className="text-center my-14">
        <h2>{t("details_title")}</h2>
        <img
          src={HeartLine}
          className="mx-auto my-8 w-[300px]"
          alt="heart line"
        />
        <Flexible
          className="font-[600] px-5"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          {t("details_text_1")}
          <br />
          <br />
          {t("details_text_2")}
        </Flexible>
        <hr className="mx-auto my-8 w-[300px]" />
      </div>
      <Container>
        <AttendanceGuests />
      </Container>
    </ForthPagePart>
  );
};
