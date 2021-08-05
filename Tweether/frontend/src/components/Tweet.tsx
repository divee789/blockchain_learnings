import { Link } from "react-router-dom";
import Moment from "react-moment";

const Tweets = ({ tweet }: any) => {
  const { text, user, postedAt } = tweet;
  const { firstName, lastName, username } = user;

  return (
    <>
      <div className="tweet_item">
        <div className="top">
          <Link to={`/profile/${username}`}>
            {firstName} {lastName}
          </Link>
          <time>
            <Moment fromNow ago unix>
              {postedAt}
            </Moment>
          </time>
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Tweets;
