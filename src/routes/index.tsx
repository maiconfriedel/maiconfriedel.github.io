import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-[85%] items-center justify-center text-white px-6">
      <img
        src="https://github.com/maiconfriedel.png"
        alt="avatar"
        className="w-60 h-60 rounded-full"
      />
      <Link to="/about-me">
        <h1 className="text-5xl font-bold mt-2">Maicon Friedel</h1>
      </Link>
      <p className="text-xl mt-2">{t("title")}</p>
      <div className="flex flex-row mt-2 items-center justify-center gap-4">
        <a
          href="https://linkedin.com/in/maicon-gabriel-friedel-882059173"
          target="_blank"
        >
          <SlSocialLinkedin
            size={30}
            color="white"
            className="cursor-pointer transition ease-in-out hover:scale-125"
          />
        </a>
        <a href="https://github.com/maiconfriedel" target="_blank">
          <FaGithub
            size={30}
            color="white"
            className="cursor-pointer transition ease-in-out hover:scale-125"
          />
        </a>
        <a href="mailto:maicon.friedel@gmail.com">
          <MdOutlineMail
            size={35}
            color="white"
            className="cursor-pointer mt-[2px] transition ease-in-out hover:scale-125"
          />
        </a>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: () => <Index />,
});
