import { useContext } from "react";

import { Link } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import "./ListStoriesRoute.css";

const ListStoriesRoute = () => {
  const { stories, deleteStory } = useContext(StoriesContext);

  return (
    <div className="ListStoriesRoute">
      <h2>Pick a story</h2>
      <ul>
        {stories.map((story, i) => (
          <li key={i}>
            <Link to={`/stories/${encodeURIComponent(story.id!)}`}>
              Mad Lib by: {story.author}
            </Link>
            <button onClick={() => deleteStory(story.id!)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListStoriesRoute;
