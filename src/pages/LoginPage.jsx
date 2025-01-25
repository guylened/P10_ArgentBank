import "../styles/main.css";
import { FormSignIn } from "../components/FormSignIn.jsx"


export const LoginPage = () => {
  return (
    <main className="bg-main-color">
      <section className="contentCard">
      <h2 className="sr-only">Sign In form</h2>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h3 className="title">Sign In</h3>
        <FormSignIn />
      </section>
    </main>
  );
};