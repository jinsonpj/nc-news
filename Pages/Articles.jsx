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
      <>
        <h3>List of Articles</h3>
        <ArticlesList
          title={items.articles.map((item) => (
            <ol key={item.article_id} className="indart">
              <div>{item.title}</div>
              <div>{item.author}</div>
              <div>{item.topic}</div>
              <img src={item.article_img_url} />
              <div>
                {item.votes} votes Published on {item.created_at}
                {item.comment_count} comments
              </div>
            </ol>
          ))}
        />
      </>
    </main>
  );
};

export default Articles;
