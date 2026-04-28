import { useEffect } from "react";
import { FirstPage } from "./components/first-page";
import { ForthPage } from "./components/forth-page";
import { LastFooterPage } from "./components/last-footer-page";
import { MusicPage } from "./components/music-page";
import { SecondPage } from "./components/second-page";
import { ThirdPage } from "./components/third-page";
import AOS from "aos";
import "aos/dist/aos.css";
import { BackToTop } from "./components/top-button";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./languages/LanguageSwitcher";

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50, // Փոքրացրու offset-ը, որ շուտ սկսի
      easing: "ease-in-out",
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <LanguageSwitcher />
      <MusicPage />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <ForthPage />
      <LastFooterPage />
      {/* <BackToTop /> */}
    </>
  );
}

export default App;
