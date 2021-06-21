import React, { useState } from "react";

const LoginForm = () => {
    const [account, setAccount] = useState({username: '', password:''})
    const username = React.createRef();
    const handleSubmit = e =>{
        e.preventDefault();

        console.log('Form Submitted')
    }
    const handleChange = ({currentTarget:input}) =>{
        const newAccount = {...account}
        newAccount[input.name] = input.value;
        setAccount(newAccount)
    }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
          value={account.username} 
          onChange={handleChange}
          name="username"
          ref={username} autoFocus id="username" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
          value={account.password} 
          onChange={handleChange}
          name="password"
          id="password" type="text" className="form-control" />
        </div>
        <button style={{margin:"15px 0 0 0"}} className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
