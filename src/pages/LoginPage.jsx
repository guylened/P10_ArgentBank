import "../styles/main.css";
import { FormSignIn } from "../components/FormSignIn.jsx"


export const LoginPage = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <FormSignIn />
      </section>
    </main>
  );
};