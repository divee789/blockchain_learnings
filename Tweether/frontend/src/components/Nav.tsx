import { Link } from "react-router-dom";

const Navbar = ({ userInfo, toggleComposeModal }: any) => {
  const { firstName, lastName, username } = userInfo;

  return (
    <div className="nav_user">
      <button onClick={toggleComposeModal}>Compose Post</button>
      <Link to={`/profile/${username}`}>
        <span>
          {firstName} {lastName}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
