import React from "react";
import SearchBar from "./components/SearchBar";
import { useEffect , useState } from "react";

function App() {

  const [news, setNews] = useState([]);

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Crime');
  const [effect, setEffect] = useState('')

  useEffect(() => {
    const fetchApi = async () => {
      const apiKey = "b616914963c4445fa9a76dc8b77d46af";

      const url = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      setNews(data.articles);
      console.log(data.articles);
    };
    fetchApi();
  }, [effect]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
      setQuery(search);
      setEffect(query)
      setSearch("");
  };

  return (
    <>
      <div className="container">
        <h1>Your News App</h1>
        <SearchBar search={search}  news={news} handleChange={handleChange} handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
