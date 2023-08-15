const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      props.onAuth({ username: value, secret: value }); //sets the username and secret to the value of the input
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card"> //html form element that takes in a username
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit"> /*button that submits the username*/
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;