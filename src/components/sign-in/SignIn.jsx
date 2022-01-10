import { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sign-in">
      <h2>I all ready have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          placeholder="Enter your email"
          Onchange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Email</label>
        <FormInput
          type="password"
          name="password"
          placeholder="Enter your password"
          Onchange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Password</label>

        <CustomButton type="submit">sign in</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
