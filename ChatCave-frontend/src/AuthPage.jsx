import axios from "axios";

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
        axios.post(
            'http://localhost:3001/authenticate', { username: value, secret: value }
            ) //posts the username and secret to the server
            .then(r => props.onAuth({ ...r.data, secret: value})) //because its a promise, we need to wait for the response to come back before we can set the username and secret
            .catch(e => console.log('error', e)) //if there is an error, console log it
      props.onAuth({ username: value, secret: value }); //sets the username and secret to the value of the input
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">ChatCave Welcome👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;