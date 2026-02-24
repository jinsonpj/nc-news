import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/Articles">Articles</Link>
      <Link to="/Topics">Topics</Link>
      <Link to="/Users">Users</Link>
    </nav>
  );
};

export default Nav;
