import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./GlobalStyle.jsx";
import "./index.css";
import { preloadFonts } from "./fontLoader.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./languages/i18n.js";

preloadFonts();

AOS.init({
  duration: 800,
  offset: 100,
  once: true,
  easing: "ease-out-cubic",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>{" "}
  </StrictMode>,
);
