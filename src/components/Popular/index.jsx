import { useEffect, useState } from "react";
import LANGUAGES from "../../constants/languages";
import { getPopularRepos } from "../../utils/api";
import SelectLangButton from "../SelectLangButton";
import TrendingRepositoryCard from "../TrendingRepositoryCard";
import Loading from "../Loading";

export default function Popular() {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);
  const [popularRepositories, setPopularRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchRepositories() {
      setIsLoading(true);
      const items = await getPopularRepos(selectedLanguage.en);
      setIsLoading(false);

      setPopularRepositories(items);
    }

    fetchRepositories();
  }, [selectedLanguage]);

  return (
    <>
      <h1 className="center-text">This is Popular!</h1>
      <header>
        <ul data-test="nav-languages">
          {LANGUAGES.map((language) => {
            return (
              <SelectLangButton
                key={language.en}
                name={language.ko}
                selected={language === selectedLanguage}
                onSelectLanguage={() => setSelectedLanguage(language)}
                testId={`btn-language-${language.en}`}
              />
            );
          })}
        </ul>
      </header>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {popularRepositories.map((repository, index) => {
            return (
              <TrendingRepositoryCard
                key={repository.gitUrl}
                index={index}
                {...repository}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
