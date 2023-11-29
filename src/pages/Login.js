import { magic } from "../lib/magic";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const handleSocialLogin = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "github",
        redirectURI: new URL("/dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Magic + GitHub</h1>
      <button onClick={handleSocialLogin}>
        <FaGithub size={"2.5rem"} />
        Log in with GitHub
      </button>
    </div>
  );
};

export default Login;
