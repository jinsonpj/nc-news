import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Articles from "../Pages/Articles";
import SingleArticle from "../Pages/SingleArticle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
