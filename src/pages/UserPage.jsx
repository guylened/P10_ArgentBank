import "../styles/main.css";
import { AccountCard } from "../components/AccountCard.jsx";
import { Button } from "../components/Button.jsx";
import { EditNameForm } from "../components/EditNameForm.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react"

export const UserPage = () => {
  const userData = useSelector((state)=> state.UserData);
  const userAuth = userData.isAuthenticated;  
  const navigate = useNavigate();
  const [isFormOpened, setIsFormOpened] = useState(false);

  useEffect(() => {
    if (!userAuth) {
      navigate("/"); 
    }
  }, [userAuth, navigate]);

  
  if (!userAuth) {
    return null;
  }
 

  return (
    
      <main className="bg-main-color">
    <section className="welcome-banner">
    <h2 className="sr-only">User profile</h2>
      <h3 className="title">Welcome back<br />{userData.userName}!</h3>

      {!isFormOpened && (
          <Button 
          type={1}
          className="edit-button"          
          value="Edit Name"            
          onClick={() => setIsFormOpened(true)}
          />
        )}
        
        <EditNameForm
          opened={isFormOpened}
          onClose={() => setIsFormOpened(false)}
        />

               
      
    </section>
    <section>
    <h2 className="sr-only">Accounts</h2>
    <AccountCard accountTitle="Argent Bank Checking (x8349)" accountAmount="$2,082.79" amountDescription="Available Balance"></AccountCard>
    <AccountCard accountTitle="Argent Bank Savings (x6712)" accountAmount="$10,928.42" amountDescription="Available Balance"></AccountCard>
    <AccountCard accountTitle="Argent Bank Credit Card (x8349)" accountAmount="$184.30" amountDescription="Current Balance"></AccountCard> 
    </section>   
  </main>
       

   );
};