import { Link, useRouteError } from "react-router-dom";
import "../styles/main.css";
import { Header } from "../layout/Header.jsx";
import { Footer } from "../layout/Footer.jsx";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  const a = "Go to home page";
  return (
    <>
      <Header />
      <main className="bg-dark">
        <div className="errorCard">
          <p className="errorStatus">{error.status}</p>
          <p className="messageError">{error.statusText}</p>
          <Link to={`./`} className="linkHome">
            {" "}
            {a}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};
