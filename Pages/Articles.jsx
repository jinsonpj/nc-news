import ArticlesList from "../src/components/articleslist";

const Articles = ({
  items,
  setItems,
  dataIsLoaded,
  setDataIsLoaded,
  error,
}) => {
  return (
    <main>
      {/* {error && <p>{error}</p>} */}

      <>
        <h3>List of Articles</h3>
        <ArticlesList
          title={items.articles.map((item) => (
            <li>
              {item.author}
              {item.title}
              {item.topic}
              {item.votes}
              {item.comment_count}
              {item.article_img_url}
            </li>
          ))}
        />
      </>
    </main>
  );
};

export default Articles;
