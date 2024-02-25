import React, { useReducer, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./Posts";
import AddPost from "./AddPost";
import Home from "./Home";
import Error from "./Error";
import Loader from "./Loader";

const initialState = {
  posts: [],
  title: "",
  body: "",
  ButtonDown: false,
  ButtonUp: false,
  loading: true,
  error: null,
};
function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error("Unknown action type");
    case "PostsReceved":
      return { ...state, posts: action.payload };
    case "handelLoading":
      return { ...state, loading: action.payload };
    case "handelError":
      return { ...state, error: action.payload };
    case "newPost":
      return { ...state, posts: action.payload };
    case "newTitle":
      return { ...state, title: action.payload };
    case "newBody":
      return { ...state, body: action.payload };
    case "restTilte":
      return { ...state, title: "" };
    case "restBody":
      return { ...state, body: "" };
    case "ToggleButtonDown":
      return { ...state, ButtonDown: action.payload };
    case "ToggleButtonUp":
      return { ...state, ButtonUp: action.payload };
  }
}
export default function Content() {
  const [
    { posts, title, body, ButtonDown, ButtonUp, loading, error },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          if (!res.ok) {
            throw Error("Faild to Fetch Data");
          }
          return res.json();
        })
        .then((data) => {
          if (data.Response === "False") throw new Error("Posts not found");
          dispatch({ type: "PostsReceved", payload: data });

          dispatch({ type: "handelLoading", payload: false });

          dispatch({ type: "handelError", payload: null });
        })
        .catch((err) => {
          // console.log(err.message);

          dispatch({ type: "handelLoading", payload: false });

          dispatch({ type: "handelError", payload: err.message });
        });
    }, 1000);
  }, []);

  return (
    <div className="content">
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <>
                {loading && <Loader />}
                {posts && !loading && !error && (
                  <Posts
                    posts={posts}
                    dispatch={dispatch}
                    showButtonDown={ButtonDown}
                    showButtonUp={ButtonUp}
                  />
                )}
                {error && <Error message={error} />}
              </>
            }
          />
          <Route
            path="/addProducts"
            element={
              <AddPost
                dispatch={dispatch}
                posts={posts}
                title={title}
                body={body}
              />
            }
          />
        </Routes>
      }
    </div>
  );
}
