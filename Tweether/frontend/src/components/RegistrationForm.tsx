import { useState } from "react";

import { createUser } from "../web3/provider";

import "./RegistrationForm.css";

const Input = ({ title, value, onChange }: any) => (
  <>
    <label>{title}</label>

    <div>
      <input value={value} onChange={onChange} />
    </div>
  </>
);

const RegistrationForm = (props: { walletAddress: string }) => {
  const [state, setState] = useState<any>({
    firstName: "",
    lastName: "",
    username: "",
    gravatarEmail: "",
    bio: "",
  });

  const [feedback, setFeedback] = useState<string>(null as unknown as string);
  const [loading, setLoading] = useState(false);

  const updateField = (fieldName: string, e: { target: { value: any } }) => {
    const newState: any = {};
    newState[fieldName] = e.target.value;

    setState({
      ...state,
      ...newState,
    });
  };

  const createNewUser = async () => {
    // Some quick validation checks
    for (const key in state) {
      if (!state[key]) {
        return alert(`You must fill in your ${key}!`);
      }
    }

    const { firstName, lastName, username, bio, gravatarEmail } = state;

    setLoading(true);

    try {
      const txHash = await createUser(
        props.walletAddress,
        username,
        firstName,
        lastName,
        bio,
        gravatarEmail
      );

      setFeedback(txHash);
      alert("Your account is being created");
      setLoading(false);
    } catch (err) {
      alert(`Sorry, we couldn't create your user`);
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <section className="contact_section">
      <form>
        <h2>Create your account</h2>

        <Input
          title="First name"
          onChange={(e: { target: { value: any } }) =>
            updateField("firstName", e)
          }
        />

        <Input
          title="Last name"
          onChange={(e: { target: { value: any } }) =>
            updateField("lastName", e)
          }
        />

        <Input
          title="Desired username"
          onChange={(e: any) => updateField("username", e)}
        />

        <Input
          title="Gravatar email"
          onChange={(e: any) => updateField("gravatarEmail", e)}
        />

        <Input title="Bio" onChange={(e: any) => updateField("bio", e)} />

        <button onClick={() => createNewUser()} disabled={loading}>
          {loading ? "Please wait..." : "Create account"}
        </button>

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
      </form>
    </section>
  );
};

export default RegistrationForm;
