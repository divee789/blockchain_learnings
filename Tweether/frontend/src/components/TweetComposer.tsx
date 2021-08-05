import { useState } from "react";
import { createTweet } from "../web3/provider";

const ComposeModal = (props: { onClose: any; userAddress: string }) => {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState<string>(null as unknown as string);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const post = async () => {
    try {
      if (text === "") {
        alert("Your post is empty");
        return;
      }
      setLoading(true);
      const txHash = await createTweet(text, props.userAddress);
      setFeedback(txHash);
      alert("Your post is being uploaded!");
      setLoading(false);
    } catch (error) {
      alert(`Sorry, we couldn't create your post`);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Create a new post</h3>

      <div>
        <textarea value={text} onChange={handleChange} maxLength={140} />
      </div>

      <div>
        <button
          onClick={post}
          disabled={loading}
          style={{
            marginTop: 12,
          }}
        >
          {loading ? "Creating post..." : "Create post"}
        </button>
      </div>

      {feedback && (
        <div>
          <p>
            Check the status of your transaction:
            <a
              target="_blank"
              href={`https://ropsten.etherscan.io/tx/${feedback}`}
              rel="noreferrer"
            >
              {feedback}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default ComposeModal;
