import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import i18n from "./i18n/config";

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="card">
      <h1>Maicon Friedel</h1>
      <p>
        <button onClick={() => i18n?.changeLanguage("en")}>EN</button>
        <button
          onClick={() => i18n?.changeLanguage("pt")}
          style={{ marginLeft: 10 }}
        >
          PT
        </button>
      </p>
      <p>{t("title")}</p>
      <p>{t("description.part1")}</p>
      <p>{t("description.part2")}</p>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>
          {t("incrementCounter")}
        </button>
      </p>
      <p>{t("userMessagesUnread", { count })}</p>
    </div>
  );
}

export default App;
