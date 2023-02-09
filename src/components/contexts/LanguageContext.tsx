import { Children, createContext } from "react";
import { useState } from "react";
import { translations, initialLanguage } from "./translations";
import EN from "../../assets/EN.png"
import ES from "../../assets/ES.png"


const LanguageContext = createContext("");
interface LanguageInterface {
  children: React.ReactNode
}
const LanguageProvider =  (props: LanguageInterface) => {
const [ language, setLanguage ] = useState <string> (initialLanguage);
const [ texts, setTexts ] = useState(translations[language]); 
const [ flag, setFlag] = useState(EN)
const handleLanguage = () => {

  if (language === "en") {
setLanguage("es")
setFlag(ES)
setTexts(translations.es)
}
if (language === "es"){
setLanguage("en")
setFlag(EN)
setTexts(translations.en)
} 
}; 

const data : any = { language, texts, handleLanguage, flag };
return (
<LanguageContext.Provider value={data}>{props.children}</LanguageContext.Provider>
)
};

export { LanguageProvider };
export default LanguageContext