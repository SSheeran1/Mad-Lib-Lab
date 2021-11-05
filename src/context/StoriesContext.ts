import { createContext } from "react";
import Story from "../models/Story";

interface StoriesContextModel {
  stories: Story[];
  addStory: (story: Story) => void;
  deleteStory: (id: number) => void;
}

const defaultValues: StoriesContextModel = {
  stories: [],

  addStory: () => {},
  deleteStory: () => {},
};

const StoriesContext = createContext(defaultValues);

export default StoriesContext;
