import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-[85%] items-center justify-center text-white">
      {t("under_construction")}
    </div>
  );
};

export const Route = createFileRoute("/projects")({
  component: () => <Projects />,
});
