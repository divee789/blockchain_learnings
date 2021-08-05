import { Link } from "react-router-dom";

const Navbar = ({ userInfo, toggleComposeModal }: any) => {
  const { firstName, lastName } = userInfo;

  return (
    <nav>
      <button onClick={toggleComposeModal}>Compose Tweet</button>
      <Link to={`/profile`}>
        <span>
          {firstName} {lastName}
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
