import { useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./ViewStoryRoute.css";

interface RouteParams {
  id: string;
}

const ViewStoryRoute = () => {
  const { stories, deleteStory } = useContext(StoriesContext);
  const id: string = useParams<RouteParams>().id;
  const index: number = stories.findIndex((item) => item.id === parseInt(id));
  const story: Story | undefined = stories.find(
    (item) => item.id === parseInt(id)
  );
  const nextId = (): number | undefined => {
    if (stories[index + 1]) {
      return stories[index + 1].id;
    } else {
      return stories[0].id;
    }
  };
  const prevId = (): number | undefined => {
    if (stories[index - 1]) {
      return stories[index - 1].id;
    } else {
      return stories[stories.length - 1].id;
    }
  };

  return (
    <div className="ViewStoryRoute">
      <h2>Mad Lib by: {story?.author}</h2>
      <p>
        On my way to {story?.word1}, I met {story?.word2}. They were in quite a
        hurry because they were meeting {story?.word3}, the {story?.word4}, in{" "}
        {story?.word5} minutes! So we said, "{story?.word6}," and parted ways.
      </p>
      <button onClick={() => deleteStory(story?.id!)}>X</button>
      <Link to={`/stories/${prevId()}`}>Previous story</Link>
      <Link to={`/stories/${nextId()}`}>Next story</Link>
    </div>
  );
};

export default ViewStoryRoute;
