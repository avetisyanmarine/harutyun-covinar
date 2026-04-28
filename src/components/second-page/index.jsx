import { SecondPagePart, GridDiv } from "./styled";
import { Container, Flexible } from "../../GlobalStyle";
import { useEffect, useState } from "react";
import BlockImage from "../../assets/image/blockimage.jpg";
import PhotoF1 from "../../assets/image/photof1.jpg";
import LineAes from "../../assets/image/lineaes.png";
import { ThirdPagePartCalendar } from "../third-page/styled";
import { useTranslation } from "react-i18next";

export const SecondPage = () => {
  const { t } = useTranslation();
  
  // Հիշեցում. JavaScript-ում ամիսները սկսվում են 0-ից (8-ը Սեպտեմբերն է, 5-ը՝ Հունիսը)
  const weddingDate = new Date(2026, 8, 9, 0, 0, 0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <SecondPagePart className="my-10">
      <Container>
        <div>
          <h2 className="mb-10" data-aos="zoom-in">
            {t('timer_title')}
          </h2>
          <GridDiv>
            <Flexible data-aos="flip-up">
              <h2>{formatNumber(timeLeft.days)}</h2>
              <p>{t('days')}</p>
            </Flexible>
            <Flexible data-aos="flip-up" data-aos-duration="900" data-aos-delay="450">
              <h2>{formatNumber(timeLeft.hours)}</h2>
              <p>{t('hours')}</p>
            </Flexible>
            <Flexible data-aos="flip-up" data-aos-duration="900" data-aos-delay="600">
              <h2>{formatNumber(timeLeft.minutes)}</h2>
              <p>{t('minutes')}</p>
            </Flexible>
            <Flexible className="uniqueBorder" data-aos="flip-up" data-aos-duration="900" data-aos-delay="750">
              <h2>{formatNumber(timeLeft.seconds)}</h2>
              <p>{t('seconds')}</p>
            </Flexible>
          </GridDiv>
        </div>

        <div
          className="bg-[#ffffff] rounded-[15px] w-[271px] h-[358px] mt-[50px] mx-auto drop-shadow-2xl flex flex-col items-center justify-center gap-4 p-4"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <img src={BlockImage} className="mt-[6px]" alt="" />
          <div className="font-[600] text-center">
            <p>{t('quote')}</p>
            <p className="mt-4">{t('quote_source')}</p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="mt-10 mb-7">
          <h2 className="mb-10">{t('guests_title')}</h2>
          <Flexible className="font-[600]">
            <p>{t('invitation_text')}</p>
          </Flexible>
        </div>
      </Container>

      <img src={LineAes} alt="" className="w-full" />

      <Container>
        <h2 className="mt-5" data-aos="zoom-in">
          {t('month_name')}
        </h2>
        <ThirdPagePartCalendar
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          className="mt-15"
        >
          {/* Շաբաթվա օրերը JSON զանգվածից */}
          {t('week_days', { returnObjects: true }).map((day, index) => (
            <div key={index} className="font-bold text-center py-2 mb-3" style={{ fontSize: "16px" }}>
              {day}
            </div>
          ))}
          
          {[...Array(37)].map((_, i) =>
            i > 0 && i <= 30 ? (
              // Նշում ենք ամսի 9-ը որպես հատուկ օր
              <div key={i} className={i == 9 ? "special" : ""}>{i}</div>
            ) : (
              <div key={i}></div>
            )
          )}
        </ThirdPagePartCalendar>
        <img src={PhotoF1} alt="" className="rounded-[15px] mt-[50px] grayscale" />
      </Container>
    </SecondPagePart>
  );
};