import { useState } from "react";
import { createTweet } from "../web3/provider";
import Button from "./Button";

const ComposeModal = (props: { onClose: any; userAddress: string }) => {
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const post = async () => {
    await createTweet(text, props.userAddress);

    alert("Your tweet was posted!");

    props.onClose();
  };

  return (
    <div>
      <h3>Post a new tweet</h3>

      <textarea value={text} onChange={handleChange} maxLength={140} />

      <Button
        onClick={post}
        disabled={false}
        style={{
          marginTop: 12,
          float: "right",
        }}
      >
        Post tweet
      </Button>
    </div>
  );
};

export default ComposeModal;
