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
        <select onChange={(e) => changeLanguage(e.target.value)}>
            {languages.map((ln) => (
                <option key={ln.code} value={ln.code}>
                    {ln.lang}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelector;
