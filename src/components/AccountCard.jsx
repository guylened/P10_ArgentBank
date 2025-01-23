import PropTypes from "prop-types";
import { Button } from "./Button";
import "../styles/main.css";


export const AccountCard = ({accountTitle, accountAmount, amountDescription}) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{accountTitle}</h3>
        <p className="account-amount">{accountAmount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div> 
      <div className="account-content-wrapper cta">
        <Button className="transaction-button" value="View transactions" type={1} ></Button>        
      </div>
    </section>
      )
      }


      AccountCard.propTypes = {
        accountTitle: PropTypes.string.isRequired,
        accountAmount: PropTypes.string.isRequired,
        amountDescription: PropTypes.string.isRequired,        
      };