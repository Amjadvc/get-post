import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Post from "./Post";
import Scrool from "./Scrool";

export default function Posts({
  posts,
  dispatch,
  showButtonDown,
  showButtonUp,
}) {
  const handleScroll = (direction) => () => {
    if (direction === "down" && window.scrollY < 3000) {
      dispatch({ type: "ToggleButtonDown", payload: true });
    } else if (direction === "up" && window.scrollY > 17000) {
      dispatch({ type: "ToggleButtonUp", payload: true });
    } else {
      if (direction === "down")
        dispatch({ type: "ToggleButtonDown", payload: false });
      else dispatch({ type: "ToggleButtonUp", payload: false });
    }
  };

  const handleClick = (direction) => () => {
    const scrollTo = direction === "down" ? 22744 : 0;
    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Scrool
        className={"toDown"}
        handleScroll={handleScroll("down")}
        handleClick={handleClick("down")}
        showButton={showButtonDown}
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </Scrool>

      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <Scrool
        className={"toUp"}
        handleScroll={handleScroll("up")}
        handleClick={handleClick("up")}
        showButton={showButtonUp}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Scrool>
    </>
  );
}
