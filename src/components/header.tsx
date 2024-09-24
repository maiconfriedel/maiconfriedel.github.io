import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="sticky top-0 text-white flex flex-row justify-between items-baseline p-3">
      <div className="flex flex-row items-baseline gap-3">
        <Link to="/" className="[&.active]:font-bold [&.active]:text-xl">
          {t("header.home")}
        </Link>
        <Link
          to="/about-me"
          className="[&.active]:font-bold [&.active]:text-xl"
        >
          {t("header.about_me")}
        </Link>
        <Link to="/skills" className="[&.active]:font-bold [&.active]:text-xl">
          {t("header.skills")}
        </Link>
        <Link
          to="/projects"
          className="[&.active]:font-bold [&.active]:text-xl"
        >
          {t("header.projects")}
        </Link>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => i18n.changeLanguage("en")}
          className={
            i18n.language.toUpperCase() === "EN" ? "font-bold text-xl" : ""
          }
        >
          EN
        </button>
        <button
          onClick={() => i18n.changeLanguage("pt")}
          className={
            i18n.language.toUpperCase() === "PT" ? "font-bold text-xl" : ""
          }
        >
          PT
        </button>
      </div>
    </div>
  );
};
