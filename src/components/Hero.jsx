import "../styles/main.css";

export const Hero = () => {
  return (
    <div className="hero">
      <section className="contentCard hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle-large">
          No fees. <br />
          No minimum deposit.
          <br />
          High interest rates.
        </p>
        <p className="s-important-text">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
};
