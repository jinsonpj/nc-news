import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  return (
    <section className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </section>
  );
};

export default ArticleList;
