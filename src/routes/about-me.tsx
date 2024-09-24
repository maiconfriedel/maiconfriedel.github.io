import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-[85%] items-center justify-center text-white px-6 text-center">
      <img
        src="https://github.com/maiconfriedel.png"
        alt="avatar"
        className="w-60 h-60 rounded-full"
      />
      <h1 className="text-3xl font-bold mt-2">{t("description.name")}</h1>
      <div className="flex mt-4 flex-col max-w-[700px] items-center justify-center text-center gap-2 text-sm">
        <p>{t("description.part1")}</p>
        <p>{t("description.part2")}</p>
        <p>{t("description.part3")}</p>
        <p>{t("description.part4")}</p>
        <p className="mt-4 font-bold">{t("description.part5")}</p>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/about-me")({
  component: () => <AboutMe />,
});
