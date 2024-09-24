import { useState } from "react";
import LANGUAGES from "../../constants/languages";
import SelectLangButton from "../SelectLangButton";

export default function Popular() {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);

  return (
    <>
      <h1 className="center-text">This is Popular!</h1>
      <ul>
        {LANGUAGES.map((language) => {
          return (
            <SelectLangButton
              key={language.en}
              name={language.ko}
              selected={language === selectedLanguage}
              onSelectLanguage={() => setSelectedLanguage(language)}
            />
          );
        })}
      </ul>
    </>
  );
}
