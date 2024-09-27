import { useEffect, useState } from "react";
import LANGUAGES from "../../constants/languages";
import { getPopularRepos } from "../../utils/api";
import SelectLangButton from "../SelectLangButton";
import TrendingRepositoryCard from "../TrendingRepositoryCard";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import "./styles.css";

export default function Popular() {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);
  const [popularRepositories, setPopularRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        setIsLoading(true);
        setIsError(false);

        const items = await getPopularRepos(selectedLanguage.en);

        setIsLoading(false);
        setPopularRepositories(items);
        setIsError(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    fetchRepositories();
  }, [selectedLanguage]);

  return (
    <>
      <header>
        <div data-test="nav-languages">
          {LANGUAGES.map((language) => {
            return (
              <SelectLangButton
                key={language.en}
                name={language.en}
                selected={language === selectedLanguage}
                onSelectLanguage={() => setSelectedLanguage(language)}
                testId={`btn-language-${language.en}`}
              />
            );
          })}
        </div>
      </header>
      <div className="scrolling">
        {isError ? (
          <ErrorMessage
            message="Error Occurred"
            testId="error-message-popular"
          />
        ) : isLoading ? (
          <Loading />
        ) : (
          <div className="grid">
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
      </div>
    </>
  );
}
