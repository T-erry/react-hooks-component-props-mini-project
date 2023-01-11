function Article({ post }) {
  const { title, date, preview,  } = post;
  return (
    <article>
      <h3>{title}</h3>
      {date !== "" ? <small>{date}</small> : "January 1, 1970"}
      <p>{preview}</p>
    </article>
  );
}
export default Article;
