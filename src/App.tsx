import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="h-screen bg-zinc-950">
      <div className="sticky top-0 text-white flex flex-row justify-end items-baseline gap-3 p-3">
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
      <div className="flex flex-1 flex-col h-[90%] items-center justify-center text-white px-6">
        <img
          src="https://github.com/maiconfriedel.png"
          alt="avatar"
          className="w-60 h-60 rounded-full"
        />
        <h1 className="text-5xl font-bold mt-2">Maicon Friedel</h1>
        <p className="text-xl">{t("title")}</p>
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
        <div className="flex mt-6 flex-col max-w-[700px] items-center justify-center text-center gap-2 text-sm">
          <p>{t("description.part1")}</p>
          <p>{t("description.part2")}</p>
          <p>{t("description.part3")}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
