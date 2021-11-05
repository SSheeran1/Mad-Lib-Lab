import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>GC Mad Libs</h1>
      </Link>
      <ul>
        <li>
          <Link to="/stories">See Saved Stories</Link>
        </li>
        <li>
          <Link to="/create-story">Create a New Story</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
