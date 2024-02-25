export default function Post({ post }) {
  const { id, title, body } = post;
  return (
    <div className="post">
      <p>
        <strong>User ID: </strong>
        {id}
      </p>
      <hr></hr>
      <p>
        <strong>Post Title: </strong>
        {title}
      </p>
      <hr></hr>
      <p>
        <strong> Post body: </strong>
        {`${body.length > 120 ? body.slice(0, 120) + "..." : body}`}
      </p>
    </div>
  );
}
