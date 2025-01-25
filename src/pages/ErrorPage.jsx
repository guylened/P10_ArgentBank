import { Link, useRouteError } from "react-router-dom";
import "../styles/main.css";
import { Header } from "../layout/Header.jsx";
import { Footer } from "../layout/Footer.jsx";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log({error})
  const a = "Go to home page";
  return (
    <>
   {error.status ? (
    <>
      <Header />
      <main className="bg-main-color">
        <section className="contentCard">
          <p className="xl-important-text second-color">{error.status}</p>
          <p className="l-important-text">{error.statusText}</p>
          <Link to={`./`}>
            {" "}
            {a}
          </Link>
        </section>
      </main>
      <Footer />
      </>
    ) : 
      (
        <>
      <Header />
        <main className="bg-main-color">
          <section className="contentCard">            
            <p className="l-important-text">An error occurred, please try again.</p>
            <Link to={`./`}>
              {" "}
              {a}
            </Link>
          </section>
        </main>
        <Footer />
        </>)        
   }
    </>
  );
};
