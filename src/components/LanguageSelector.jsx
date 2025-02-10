import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const languages = [
        {
            code: "en",
            lang: "English",
        },
        {
            code: "ar",
            lang: "عربي",
        },
    ];

    const { i18n } = useTranslation();

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        console.log("Language change fired! Code:", code);
    };
    useEffect(()=>{
        document.body.dir = i18n.dir();
    },[i18n,i18n.language])
    return (
        <select className="text-2xl sm:text-lg bg-[#074226] text-white pr-2 active:bg-[#074226] active:text-white" onChange={(e) => changeLanguage(e.target.value)}>
            {languages.map((ln) => (
                <option key={ln.code} value={ln.code} className="bg-[#074226] text-white border-b border-white">
                    {ln.lang}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelector;
