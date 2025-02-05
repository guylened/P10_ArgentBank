import "../styles/main.css";
import { FeatureCard } from "./FeatureCard";

export const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureCard
        src="./src/assets/img/icon-chat.svg"
        altText="Chat Icon"
        title="You are our #1 priority"
        p="Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureCard
        src="./src/assets/img/icon-money.svg"
        altText="Money Icon"
        title="More savings means higher rates"
        p="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureCard
        src="./src/assets/img/icon-security.svg"
        altText="Security Icon"
        title="Security you can trust"
        p="We use top of the line encryption to make sure your data and money
        is always safe."
      />
    </section>
  );
};
