import { useState } from "react";
import Button from "./Button";

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

    try {
      await createUser(
        props.walletAddress,
        username,
        firstName,
        lastName,
        bio,
        gravatarEmail
      );

      alert("Your user has been created!");
    } catch (err) {
      alert(`Sorry, we couldn't create your user: ${err}`);
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

        <footer>
          <Button onClick={() => createNewUser()}>Create</Button>
        </footer>
      </form>
    </section>
  );
};

export default RegistrationForm;
