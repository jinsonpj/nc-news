import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "../Pages/Articles";
import ArticlesList from "./components/articleslist";

function App() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://nc-news-app-axmd.onrender.com/api/articles")
      .then((res) => {
        setItems(res.data);
        setDataIsLoaded(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait some time....</h1>
      </div>
    );
  }

  // console.log(items.articles[2]);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Articles items={items} error={error} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
