export default function AddPost({ posts, dispatch, body, title }) {
  function handelSubmit(e) {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        userId: 33,
        title,
        body,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.text();
      })

      .then((data) => {
        // console.log(posts);
        dispatch({ type: "newPost", payload: [...posts, JSON.parse(data)] });
        dispatch({ type: "restTilte" });
        dispatch({ type: "restBody" });

        // console.log("Success:", data);
        // console.log(posts);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
  }

  return (
    <div className="form-container">
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="inputTitle">Title</label>
          <input
            id="inputTitle"
            type="text"
            name="title"
            value={title}
            aria-describedby="Post Title"
            placeholder="Enter the title please"
            onChange={(e) =>
              dispatch({ type: "newTitle", payload: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="inputBudy">Body</label>
          <input
            id="inputBudy"
            type="text"
            name="body"
            value={body}
            aria-describedby="Post Body"
            placeholder="Enter the body please"
            onChange={(e) =>
              dispatch({ type: "newBody", payload: e.target.value })
            }
          />
        </div>

        <button className="btn">Add Post</button>
      </form>
    </div>
  );
}
