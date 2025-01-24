import PropTypes from "prop-types";
import "../styles/main.css";

const FIELD_TYPES = {
  USERNAME: 1,
  FIRSTNAME: 2,  
  LASTNAME: 3,  
  EMAIL: 4,  
  PASSWORD: 5,  
};

export const UserFields = ({ type, value = "", onChange, disabled = false }) => {
  switch (type) {
    case FIELD_TYPES.USERNAME:
      return (
        <>
        <div className="input-wrapper">
            <label htmlFor="username">User name</label>
            <input type="text" id="username" autoComplete="username" onChange={onChange} value={value} disabled={disabled} />
          </div>          
        </>
      );
      case FIELD_TYPES.FIRSTNAME:
        return (
          <>          
            <div className="input-wrapper">
              <label htmlFor="firstname">First name</label>
              <input type="text" id="firstname" autoComplete="given-name" onChange={onChange} value={value} disabled={disabled} />
            </div>           
          </>
        );
        case FIELD_TYPES.LASTNAME:
          return (
            <>            
              <div className="input-wrapper">
                <label htmlFor="lastname">Last name</label>
                <input type="text" id="lastname" autoComplete="family-name" onChange={onChange} value={value} disabled={disabled} />
              </div>                 
            </>
          );
          case FIELD_TYPES.EMAIL:
            return (
              <>              
                <div className="input-wrapper">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" autoComplete="email" onChange={onChange} value={value} disabled={disabled} />
                </div>                     
              </>
            );
            case FIELD_TYPES.PASSWORD:
              return (
                <>
                 <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" autoComplete="current-password" onChange={onChange} defaultValue={value} disabled={disabled} />
                  </div>        
                </>
              );
              default:
             return null;
              
  }
};


UserFields.propTypes = {  
  type: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};


