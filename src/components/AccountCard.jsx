import PropTypes from "prop-types";
import { Button } from "./Button";
import "../styles/main.css";


export const AccountCard = ({accountTitle, accountAmount, amountDescription}) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="s-important-text">{accountTitle}</h3>
        <p className="l-important-text">{accountAmount}</p>
        <p>{amountDescription}</p>
      </div> 
      <div className="account-content-wrapper cta">
        <Button type={1} value="View transactions" />   
      </div>
    </section>
      )
      }


      AccountCard.propTypes = {
        accountTitle: PropTypes.string.isRequired,
        accountAmount: PropTypes.string.isRequired,
        amountDescription: PropTypes.string.isRequired,        
      };