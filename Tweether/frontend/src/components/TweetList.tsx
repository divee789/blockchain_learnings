import Tweet from "./Tweet";

const TweetList = ({ tweets = [] }: any) => (
  <ul className="feed">
    {(!tweets.length || tweets.length < 1) && <p>No tweets yet.</p>}

    {tweets.map((tweet: any) => (
      <Tweet key={tweet.id} tweet={tweet} />
    ))}
  </ul>
);

export default TweetList;
