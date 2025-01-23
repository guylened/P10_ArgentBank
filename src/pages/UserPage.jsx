import "../styles/main.css";
import { AccountCard } from "../components/AccountCard.jsx";
import { Button } from "../components/Button.jsx";
import { EditNameForm } from "../components/EditNameForm.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react"

export const UserPage = () => {
  const userAuth = useSelector((state)=> state.TokenReducer.isAuthenticated);
  const userData = useSelector((state)=> state.UserDataReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userAuth) {
      navigate("/"); 
    }
  }, [userAuth, navigate]);

  
  if (!userAuth) {
    return null;
  }
  return (
    
      <main className="main bg-dark">
    <div className="header">
      <h1>Welcome back<br />{userData.userName}!</h1>
      <EditNameForm>{({ setIsOpened }) => (
      <Button className="edit-button" value="Edit Name" type={1} onClick={() => setIsOpened(true)} ></Button>
    )} 
      </EditNameForm>
           
      
    </div>
    <h2 className="sr-only">Accounts</h2>
    <AccountCard accountTitle="Argent Bank Checking (x8349)" accountAmount="$2,082.79" amountDescription="Available Balance"></AccountCard>
    <AccountCard accountTitle="Argent Bank Savings (x6712)" accountAmount="$10,928.42" amountDescription="Available Balance"></AccountCard>
    <AccountCard accountTitle="Argent Bank Credit Card (x8349)" accountAmount="$184.30" amountDescription="Current Balance"></AccountCard>    
  </main>
       

   );
};