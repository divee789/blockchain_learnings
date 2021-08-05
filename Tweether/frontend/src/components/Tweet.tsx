import { Link } from "react-router-dom";
import Moment from "react-moment";

const Tweets = ({ tweet }: any) => {
  const { text, user, postedAt } = tweet;
  const { username } = user;

  return (
    <>
      <div className="tweet">
        <div className="info">
          <div className="top">
            <Link to={`/profile/${username}`}>{username}</Link>
            <time>
              <Moment fromNow ago unix>
                {postedAt}
              </Moment>
            </time>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Tweets;
